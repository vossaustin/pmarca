class TodosController < ApplicationController
    def index
      @todos = Todo.all
      @todo = Todo.new
    end
  
    def create
      @todo = Todo.new(todo_params)
      if @todo.save
        respond_to do |format|
          format.turbo_stream
        end
      else
        render :index, status: :unprocessable_entity
      end
    end
  
    def destroy
      @todo = Todo.find(params[:id])
      @todo.destroy
      respond_to do |format|
        format.turbo_stream
      end
    end
  
    def toggle
      @todo = Todo.find(params[:id])
      @todo.update(completed: !@todo.completed)
      respond_to do |format|
        format.turbo_stream
      end
    end
  
    private
  
    def todo_params
      params.require(:todo).permit(:title, :completed)
    end
  end