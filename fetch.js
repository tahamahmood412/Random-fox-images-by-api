async function random_image(){
    let content= await fetch('https://randomfox.ca/floof/')
    console.log(content.status)
    let output= await content.json()
    console.log(output.image)
    let img_link= output.image
    console.log(img_link)
    
    // Getting control of  img tag by getElementById
    let img_tag=document.getElementById('random_image')
    img_tag.src=img_link


    if (content.status==200 && output.image!=null){
        let para1= document.getElementById('p1')
        let para2= document.getElementById('p2')
        para1.textContent='Fetch Api Executed Successfully'
        para2.textContent='Got image successfully'

    }



}
random_image()