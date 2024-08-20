const openItem = item => {
    const container = item.closest(".questions__list-item");
    const contentBlock = container.find(".questions__content");
    const textBlock = contentBlock.find(".questions__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active_acco");
    contentBlock.height(reqHeight);
}


const closeEveryItem = container => {
    const items = container.find('.questions__content');
    const itemContainer = container.find(".questions__list-item");

    itemContainer.removeClass("active_acco")
    items.height(0);
}


$('.questions__item-btn').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.questions__list');
    const elemContainer = $this.closest(".questions__list-item");

    if(elemContainer.hasClass("active_acco")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }

 
})



