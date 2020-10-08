$(function() {

  // Start by defining our global variables
  const wrapper = $('.tab-container')
  const allTabs = wrapper.find('.tab-inhalt > div')
  const tabMenu = wrapper.find('.tab-auswahl > li')
  const line = $('<div class="line"></div>').appendTo(tabMenu)

  // Hide the tabs that are not 'first-of-type'
  allTabs.not(':first-of-type').hide() 
  // Change width of first to 100%
  tabMenu.filter(':first-of-type').find(':first').width('100%')

  // For each tab
  // Set the attribute data of the li
  tabMenu.each(function (i) {
    $(this).attr('data-tab', 'tab' + i)
  })

  // same for the corresponding content div

  allTabs.each(function (i) {
    $(this).attr('data-tab', 'tab' + i)
  })


  tabMenu.on('click' , function (){

    let dataTab = $(this).data('tab')
    let getWrapper = $(this).closest(wrapper)

    // We remove 'active' from the  tabs, and add it to the clicked tab
    getWrapper.find(tabMenu).removeClass('active')
    $(this).addClass('active')

    // Reset the width of ALL lines to 0
    getWrapper.find('.line').width(0)
    // Animate the width of the clicked line to 100%
    $(this).find(line).animate({'width':'100%'}, 'fast')

    // We reset all the content div's
    getWrapper.find(allTabs).hide()
    // show the tab content using it's correspinding data-tab attribute
    getWrapper.find(allTabs).filter(`[data-tab=${dataTab}]`).show()

  })

})