
function getComments() {

}

  fetch(location.origin + "/getComments")

    .then(dt => dt.json())
    .then(dt => {
    console.log(dt)

// pobieramy sekcje komentarzy z html'a
    const commentSection = document.querySelector(".commentsSection")

    commentSection.innerText = "";



    for(let comment of dt){
      const article = document.createElement("article");
     
      
      const nick = document.createElement('div');
      nick.innerText = comment.nick;
      article.append(nick);

      const content = document.createElement('div');
      content.innerText = comment.comment;
      article.append(content);

        
      document.querySelector(".commentsSection").append(article);
    }


})

 // (dt) to tablica elementow
 // wyciagnaie elementow z tej tablicy -
 // pętla! for   


 // wysyłanie komentarzy

 const form = document.querySelector('form')
 form.addEventListener("submit" , e => {
     e.preventDefault();

     const nick = e.target[0].value;
     const comment = e.target[1].value;

     console.log(form.action);
     fetch(form.action + "?nick="+ nick + "&comment=" + comment)
     .then(dt => dt.text())
     .then(dt =>  {        
        console.log(dt)
        
     })
 
})
