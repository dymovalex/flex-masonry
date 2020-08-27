class FlexMasonry {
	constructor(DOMelement, arrayOfElements, numbersOfColumns) {
		this.DOMelement = DOMelement;
		this.arrayOfElements = arrayOfElements;
		this.numbersOfColumns = numbersOfColumns;
	}

	static prepareElements (elements) {
		return elements.map(element => {
			element.classList.add('masonry-card');
			return element;
		})
	}

	render () {
		for (let i = 0; i < this.numbersOfColumns; i++) {
			const column = document.createElement('div');
			column.classList.add('masonry-column');
			this.DOMelement.insertAdjacentElement('beforeend', column);
		}
		
		const columns = [...document.querySelectorAll('.masonry-column')];

		for (let i = 0; i < this.numbersOfColumns; i++) {
			for (let j = 0; j < this.arrayOfElements.length; j += this.numbersOfColumns) {
				if (!this.arrayOfElements[i + j]) {
					break;
				}
				columns[i].insertAdjacentElement('beforeend', this.arrayOfElements[i + j]);
			}
		}
	}
}

export default FlexMasonry;