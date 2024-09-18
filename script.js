let url ="./fotograf.json"

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Spørsmål 1
    console.log(`I den listen har vi ${data.length} bilder`);

    // Spørsmål 2
    let albumArr = []
    data.forEach(element => {
      // console.log(element.albumId);
      albumArr.push(element.albumId);
      
    });
    console.log(`I den listen er det ${Math.max(...albumArr)} albumer`);

    // Spørsmål 3
        data.forEach(element => {
          if (element.id == 238) {
            console.log(`Tittelen til bildet ${element.id} er "${element.title}"`);
            
          }
          
        });
    
    // Spørsmål 4
        data.forEach(element => {
          if (element.id == 555) {
            // document.getElementById("s4").src = element.url
            
          }
          
        });
    
  })
  .catch(error => console.error('Error:', error));

  let url2 = "https://jsonplaceholder.typicode.com/posts";

  fetch(url2)
  .then(response => response.json())
  .then (emil => {
    emil.forEach(element => {
      if (element.id == 95) {
        console.log(element.title);
        
      }
      
    });

    emil.forEach(element => {
      if (element.id == 5) {
        console.log(element.title);
        element.title = "Emil er best"
        console.log(element.title);
        
      }
    });
  })
