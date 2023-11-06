document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById('fetchDataButton');
    const keywordInput = document.getElementById('dataIndexInput'); // assuming this is your search bar input
    const dataTableHead = document.querySelector('#dataTable thead tr');
    const dataTableBody = document.querySelector("#dataTable tbody");
    const search = "county";
    const cardContainer = document.getElementById('cardContainer');
    const foodButton = document.getElementById('foodButton');
    const housingButton = document.getElementById('housingButton');

    fetchDataButton.addEventListener('click', function() {
        const keyword = keywordInput.value.toLowerCase(); // convert to lowercase for case-insensitive search
        
        fetch(`/services`)
            .then(response => response.json())
            .then(data => {
                cardContainer.innerHTML = ''; // Clear existing data
                let resultsFound = false;
                
                data.forEach(entry => {

                        if (entry[search].toLowerCase().includes(keyword)) {
                            resultsFound = true;

                            
                            const card = document.createElement('div');
                            card.classList.add('card');

                            // Append elements to the card
                            const cardBody = document.createElement('div');
                            cardBody.classList.add('card-body');
                            const serviceNameElement = document.createElement('h1');
                            serviceNameElement.textContent = entry["agency_name"];

                            cardBody.appendChild(serviceNameElement);


                            const contactDiv = document.createElement('div');

                            const emailElement = document.createElement('a');
                            emailElement.classList.add('card-elem-gray');
                            emailElement.textContent = entry["service_email"];
                            contactDiv.appendChild(emailElement);

                            const websiteElement = document.createElement('a');
                            websiteElement.classList.add('card-elem-gray');
                            websiteElement.textContent = entry["service_website"];
                            contactDiv.appendChild(websiteElement);


                            cardBody.appendChild(contactDiv);

                            const descriptionElement = document.createElement('p');
                            descriptionElement.textContent = entry["angecny_desc"];

                            const hrElement = document.createElement('hr');

                            cardBody.appendChild(descriptionElement);
                            cardBody.appendChild(hrElement);

                            const addressElement = document.createElement('p');
                            addressElement.classList.add('card-elem-gray');
                            addressElement.textContent = entry["address_1"];

                            cardBody.appendChild(addressElement);

                            const numberElement = document.createElement('p');
                            numberElement.classList.add('card-elem-gray');
                            numberElement.textContent = entry["site_number"];

                            cardBody.appendChild(numberElement);

                            const scheduleElement = document.createElement('p');
                            scheduleElement.classList.add('card-elem-gray');
                            scheduleElement.textContent = entry["site_schedule"];

                            cardBody.appendChild(scheduleElement);
                            card.appendChild(cardBody);

                            // Append the card to the container
                            cardContainer.appendChild(card);
                        
                    }
                }
                
                );

                if (!resultsFound) {
                    cardContainer.innerHTML = `<tr><td colspan="${Object.keys(data[0]).length}">No results found for "${keyword}".</td></tr>`;
                }

                $('#dataIndexModal').modal('hide');
                
                
                const showthis = document.getElementById('showMe');
                showthis.style.display = 'block';
                document.getElementById('bigName').innerHTML = keywordInput.value.toUpperCase() + ' COUNTY';
               
               
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                cardContainer.innerHTML = `<tr><td colspan="2">Error fetching data. Please try again.</td></tr>`;
            })
            .finally(() => {
                // Code to close modal and clean up, if necessary
                $("#dataIndexModal").modal('hide');
                $("body").removeClass('modal-open');
                $('.modal-backdrop').remove();
                
            });
    });

    
    foodButton.addEventListener('click', function() {
        const keyword = keywordInput.value.toLowerCase(); // convert to lowercase for case-insensitive search
        
        fetch(`/services`)
        .then(response => response.json())
        .then(data => {
                cardContainer.innerHTML = '';// Clear existing data
                let resultsFound = false;
                
                data.forEach(entry => {

                        if (entry[search].toLowerCase().includes(keyword) && entry["taxonomy_name"].toLowerCase().includes("food")) {
                            resultsFound = true;

                            const card = document.createElement('div');
                            card.classList.add('card');

                            // Append elements to the card
                            const cardBody = document.createElement('div');
                            cardBody.classList.add('card-body');
                            const serviceNameElement = document.createElement('h1');
                            serviceNameElement.textContent = entry["agency_name"];

                            cardBody.appendChild(serviceNameElement);


                            const contactDiv = document.createElement('div');

                            const emailElement = document.createElement('a');
                            emailElement.classList.add('card-elem-gray');
                            emailElement.textContent = entry["service_email"];
                            contactDiv.appendChild(emailElement);

                            const websiteElement = document.createElement('a');
                            websiteElement.classList.add('card-elem-gray');
                            websiteElement.textContent = entry["service_website"];
                            contactDiv.appendChild(websiteElement);


                            cardBody.appendChild(contactDiv);

                            const descriptionElement = document.createElement('p');
                            descriptionElement.textContent = entry["angecny_desc"];

                            const hrElement = document.createElement('hr');

                            cardBody.appendChild(descriptionElement);
                            cardBody.appendChild(hrElement);

                            const addressElement = document.createElement('p');
                            addressElement.classList.add('card-elem-gray');
                            addressElement.textContent = entry["address_1"];

                            cardBody.appendChild(addressElement);

                            const numberElement = document.createElement('p');
                            numberElement.classList.add('card-elem-gray');
                            numberElement.textContent = entry["site_number"];

                            cardBody.appendChild(numberElement);

                            const scheduleElement = document.createElement('p');
                            scheduleElement.classList.add('card-elem-gray');
                            scheduleElement.textContent = entry["site_schedule"];

                            cardBody.appendChild(scheduleElement);
                            card.appendChild(cardBody);

                            // Append the card to the container
                            cardContainer.appendChild(card);

                        
                    }
                }
                
                );

                if (!resultsFound) {
                    cardContainer.innerHTML = `<tr><td colspan="${Object.keys(data[0]).length}">No results found for "${keyword}".</td></tr>`;
                }

                $('#dataIndexModal').modal('hide');
                
               
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                cardContainer.innerHTML = `<tr><td colspan="2">Error fetching data. Please try again.</td></tr>`;
            })
            .finally(() => {
                // Code to close modal and clean up, if necessary
                $("#dataIndexModal").modal('hide');
                $("body").removeClass('modal-open');
                $('.modal-backdrop').remove();
                
            });

        });


        housingButton.addEventListener('click', function() {
            const keyword = keywordInput.value.toLowerCase(); // convert to lowercase for case-insensitive search
            
            fetch(`/services`)
            .then(response => response.json())
            .then(data => {
                    cardContainer.innerHTML = '';// Clear existing data
                    let resultsFound = false;
                    
                    data.forEach(entry => {
    
                            if (entry[search].toLowerCase().includes(keyword) && entry["taxonomy_name"].toLowerCase().includes("housing")) {
                                resultsFound = true;
    
                                const card = document.createElement('div');
                                card.classList.add('card');
    
                                // Append elements to the card
                                const cardBody = document.createElement('div');
                                cardBody.classList.add('card-body');
                                const serviceNameElement = document.createElement('h1');
                                serviceNameElement.textContent = entry["agency_name"];
    
                                cardBody.appendChild(serviceNameElement);
    
    
                                const contactDiv = document.createElement('div');
    
                                const emailElement = document.createElement('a');
                                emailElement.classList.add('card-elem-gray');
                                emailElement.textContent = entry["service_email"];
                                contactDiv.appendChild(emailElement);
    
                                const websiteElement = document.createElement('a');
                                websiteElement.classList.add('card-elem-gray');
                                websiteElement.textContent = entry["service_website"];
                                contactDiv.appendChild(websiteElement);
    
    
                                cardBody.appendChild(contactDiv);
    
                                const descriptionElement = document.createElement('p');
                                descriptionElement.textContent = entry["angecny_desc"];
    
                                const hrElement = document.createElement('hr');
    
                                cardBody.appendChild(descriptionElement);
                                cardBody.appendChild(hrElement);
    
                                const addressElement = document.createElement('p');
                                addressElement.classList.add('card-elem-gray');
                                addressElement.textContent = entry["address_1"];
    
                                cardBody.appendChild(addressElement);
    
                                const numberElement = document.createElement('p');
                                numberElement.classList.add('card-elem-gray');
                                numberElement.textContent = entry["site_number"];
    
                                cardBody.appendChild(numberElement);
    
                                const scheduleElement = document.createElement('p');
                                scheduleElement.classList.add('card-elem-gray');
                                scheduleElement.textContent = entry["site_schedule"];
    
                                cardBody.appendChild(scheduleElement);
                                card.appendChild(cardBody);
    
                                // Append the card to the container
                                cardContainer.appendChild(card);
    
                            
                        }
                    }
                    
                    );
    
                    if (!resultsFound) {
                        cardContainer.innerHTML = `<tr><td colspan="${Object.keys(data[0]).length}">No results found for "${keyword}".</td></tr>`;
                    }
    
                    $('#dataIndexModal').modal('hide');
                    
                   
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                    cardContainer.innerHTML = `<tr><td colspan="2">Error fetching data. Please try again.</td></tr>`;
                })
                .finally(() => {
                    // Code to close modal and clean up, if necessary
                    $("#dataIndexModal").modal('hide');
                    $("body").removeClass('modal-open');
                    $('.modal-backdrop').remove();
                    
                });
    
            });

    
});
