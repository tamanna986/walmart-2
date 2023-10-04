function extractBrandInfo() {
    const brandItems = document.querySelectorAll('.brands-list--item');
    const brandInfoList = [];
  
    brandItems.forEach(item => {
      const titleElement = item.querySelector('h3');
      const descriptionElement = item.querySelector('p');
      const imageElement = item.querySelector('.brands-list--item-image img');
  
      if (titleElement && descriptionElement && imageElement) {
        const title = titleElement.textContent.trim();
        const description = descriptionElement.textContent.trim();
        const image = imageElement.getAttribute('src');
  
        brandInfoList.push({ title, description, image });
      }
    });
  
    return brandInfoList;
  }
  
//   // Calling the function to extract brand information
//   const extractedBrands = extractBrandInfo();
  

//   console.log(extractedBrands);