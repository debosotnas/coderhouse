class Page {
    constructor(pageData) {
        this.title = pageData.title;
        this.text = pageData.text;
        this.images = pageData.images || [];
    }

    addImage(img) {
        this.images.push(img)
    }

    getImages() {
        return this.images.map((image) => {
            return `<img src="${image}" />`;
        }).join('');
    }

    getPageContent() {
        return `
            <div class="page">
                <h2>${this.title}</h2>
                ${this.text ? `<p>${this.text}</p>` : ''}
                <div class="separator" />
                <div class="images">
                    ${this.getImages()}
                </div>
            </div>     
        `;
    }
}

export default Page;