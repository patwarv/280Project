document.addEventListener('DOMContentLoaded', (event) => {
    const fetchDataButton = document.getElementById('fetchDataButton');
    const keywordInput = document.getElementById('dataIndexInput'); // assuming this is your search bar input
    const dataTableHead = document.querySelector('#dataTable thead tr');
    const dataTableBody = document.querySelector("#dataTable tbody");

    fetchDataButton.addEventListener('click', function() {
        const keyword = keywordInput.value.toLowerCase(); // convert to lowercase for case-insensitive search
        const search = "county";
        fetch(`/services`)
            .then(response => response.json())
            .then(data => {
                dataTableHead.innerHTML = ''; // Clear existing data
                dataTableBody.innerHTML = '';

                let resultsFound = false;
                
                data.forEach(entry => {
                    // Check if any of the object's values contain the keyword
                    // for (let [key, value] of Object.entries(entry)) {
                        if (entry[search].toLowerCase().includes(keyword)) {
                            resultsFound = true;
                            
                            // Build table header (only once)
                            if (dataTableHead.children.length === 0) {
                                Object.keys(entry).forEach(k => {
                                    dataTableHead.insertAdjacentHTML('beforeend', `<th>${k}</th>`);
                                });
                            }

                            // Build table row for this entry
                            let row = '<tr>';
                            Object.values(entry).forEach(val => {
                                row += `<td>${val}</td>`;
                            });
                            row += '</tr>';
                            dataTableBody.insertAdjacentHTML('beforeend', row);
                            // break;
                        }
                    }
                // }
                );

                if (!resultsFound) {
                    dataTableBody.innerHTML = `<tr><td colspan="${Object.keys(data[0]).length}">No results found for "${keyword}".</td></tr>`;
                }

                $('#dataIndexModal').modal('hide');
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                dataTableBody.innerHTML = `<tr><td colspan="2">Error fetching data. Please try again.</td></tr>`;
            })
            .finally(() => {
                // Code to close modal and clean up, if necessary
                $("#dataIndexModal").modal('hide');
                $("body").removeClass('modal-open');
                $('.modal-backdrop').remove();
            });
    });
});
