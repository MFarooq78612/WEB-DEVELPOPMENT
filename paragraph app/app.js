const text = [
    "Hobbies play a very important role in our lives. They occupy our minds when we are free and also make us happy. Hobbies are our escape from the real world that makes us forget our worries. Moreover, they make our lives interesting and enjoyable. If we look at it, all our hobbies are very useful for us. They teach us a lot of things about different stuff. They also help in expanding our knowledge.",
    "In today’s fast and competitive world, we often get time for ourselves. Over time, our schedule gets very dull and monotonous. That is why we need to indulge in something in between to keep our minds fresh and active. What’s better than a hobby for this? One of the main benefits of having a hobby is that it is a major stress-buster. You actually enjoy doing it and it satisfies your soul.",
    "In other words, without a hobby, your life becomes an unhealthy cycle lacking any excitement or spark. Hobbies offer you a great opportunity to take a break and forget the worries of your life. They allow you to explore yourself and realize your potential in different areas.",
    "Moreover, hobbies can also be a source of extra income. For instance, if you like painting, you can actually sell your art to make some extra money. Likewise, if you have a knack for dancing, you may teach dance classes to people on your holidays. This way your hobby a benefit you both spiritually and financially as well.",
    "If I were to pick one favourite hobby of mine out of the many I have, I will definitely pick gardening. I developed a taste for dancing when I was very young. The way my feet moved to the rhythm of the music convinced my parents that I was a born dancer. Dancing is very uplifting as well as economical.",
    "I have always had a love for music and dance. However, I never realized the utter joy they bring to humans. Dancing gives us a lot of exercises. It teaches us to move our body rhythmically and feel the beat of every song. This kind of physical exercise is extremely delightful and enjoyable.",
    "Moreover, dance also taught me how to stay strong and push my limits. I have had many injuries while dancing, too many bruises and cuts but that didn’t stop me from pursuing it further. In fact, it pushes me to do my best and realize my potential more than ever.",
    "I have enrolled in dancing classes because I wish to make my hobby my career. I feel we all should do things which we enjoy doing. Everyone is running after money and in this race, they give up their likings and preferences. I have learned from this race and decided to not take part in it. I wish to take the road less traveled by and take on challenges most people don’t dare to.",
    "In short, my hobby of dancing makes me feel alive and well. It is the only thing I look forward the most to. Thus, I hope to achieve my dream of being a professional dancer and making way for people who wish to make careers out of their hobbies.",
    "My favourite hobby is cooking. I love to cook on holidays. I like to try out new and unique cuisines from different places around the world. It improves my knowledge not only about the vegetation and food habits of the people in that particular area, but it also let me know the type of vegetation there.",
];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  


const items=document.querySelector("#items");
const dataContainer=document.querySelector("#data");
const generate= ()=>{
if(isNaN(items.value)||items.value<0 || items.value>9){
const randomIndex=Math.floor(Math.random()*text.length)
dataContainer.innerHTML=`<p> ${text[randomIndex]} </p>`;

}else{
const localText =shuffle(text);
const data=text.slice(0,items.value);
const paras=data.map(
    (d)=>{
        return `<p>${d}</p>`
    }
)
console.log(paras);
dataContainer.innerHTML=paras.join("");
}
}