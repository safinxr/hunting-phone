const lodePhone = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    displayPhones(data);
}

function displayPhones(phones){
    const phoneCon =document.getElementById('phone-con');

    phones.data.forEach(phone =>{
        const phoneCard = document.createElement('div');
        phoneCard.classList='card bg-base-100 shadow-xl';
        phoneCard.innerHTML=`
        <figure class="px-10 pt-10 ">
              <img
                src="${phone.image}"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <h2 class="text-xl font-semibold">$656</h2>
            <div class="card-actions">
              <button class="btn btn-primary">Show Details</button>
            </div>
        </div>   
        `

        phoneCon.appendChild(phoneCard);
    })
}

lodePhone();