
export const renderPhotosInGrid = (data) => {
    const imageGrids = $imageGrid.children
    const imageGridsArray = Array.from(imageGrids)
    let index = 0
    let changeLimit = Math.floor(data.length / 3)
    imageGridsArray.forEach((imageGridItemContainer) => {
        const imageDataGroups = data.slice(index, index + changeLimit)
        const $imagesFragment = document.createDocumentFragment()
        imageDataGroups.forEach(image => {
            const $a = document.createElement("a")
            $a.href = `./page.html?image-id=${image.id}`
            $a.target = "_blank"
            $a.className = "image-item"
            $a.innerHTML = `
                <img src="${image.src.original}?auto=compress&cs=tinysrgb&w=600" alt="${image.alt}"/>
                <div class="img-cover">
                    <div class="img-btn-group"></div>
                    <div class="img-account">
                        <p>${image.photographer}</p>
                        <a href="${image.src.original}?cs=srgb&amp;dl=pexels-${image.photographer}-${image.id}.jpg&amp;fm=jpg"><i class="bi bi-download"></i> Download</a>
                    </div>
                </div>
            `
            $imagesFragment.appendChild($a)
        })
        index += changeLimit

        imageGridItemContainer.appendChild($imagesFragment)
    })
}

export const renderPreviewImage = (data) => {
    $previewImage.src = data.src.original
}