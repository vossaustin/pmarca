import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "tab", "panel" ]

  connect() {
    console.log("Tabs controller connected")
    this.showTab(0) // Activate first tab on connect
  }

  switch(event) {
    const button = event.currentTarget
    const index = this.tabTargets.indexOf(button)
    this.showTab(index)
  }

  showTab(index) {
    this.tabTargets.forEach((tab, i) => {
      const isActive = i === index
      tab.classList.toggle("border-blue-500", isActive)
      tab.classList.toggle("text-blue-600", isActive)
      tab.classList.toggle("border-transparent", !isActive)
      tab.classList.toggle("text-gray-500", !isActive)
    })

    this.panelTargets.forEach((panel, i) => {
      panel.classList.toggle("hidden", i !== index)
    })
  }
}