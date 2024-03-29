console.log("This is my index.js")

// Data in array of objects

const data = [

        {
            name: 'Ron Das',
            age:18,
            city: 'Kolkata',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/med/men/47.jpg'
        },

        {
            name: 'Alex Murphy',
            age:21,
            city: 'Mumbai',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/med/men/51.jpg'
        },

        {
            name: 'Arthur slate',
            age:31,
            city: 'Pune',
            language: 'Python',
            framework: 'Django',
            image: 'https://randomuser.me/api/portraits/med/men/52.jpg'
        }

]

function cvIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done:false} :
            {done: true}
        }
    };

}
const candidates = cvIterator(data);

nextCV();

const next  = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate  = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){
        

    image.innerHTML = `<img src= '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old.</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language} With ${currentCandidate.framework} framework.</li>
  </ul>`;
    }
    else{
        alert('End of candiadate list');
        window.location.reload();
    }
}
