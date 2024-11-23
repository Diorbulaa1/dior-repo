
document.getElementById('ask-btn').addEventListener('click', function () {

    const userQuery = document.getElementById('user-query').value.trim().toLowerCase();
    const responseContainer = document.getElementById('response-container');

    
    if (userQuery === '') {
        responseContainer.style.display = 'block';
        responseContainer.textContent = 'Please enter your travel preferences to get suggestions!';
        return;
    }

 
    let response = '';

    if (userQuery.includes('beach') || userQuery.includes('sun') || userQuery.includes('relax')) {
        response = 'How about visiting Bali, Maldives, or Phuket for stunning beaches and tropical vibes?';
    } else if (userQuery.includes('adventure') || userQuery.includes('mountain') || userQuery.includes('hiking')) {
        response = 'You might love hiking in the Swiss Alps, trekking in Nepal, or exploring Patagonia!';
    } else if (userQuery.includes('history') || userQuery.includes('culture') || userQuery.includes('ancient')) {
        response = 'Consider a trip to Rome, Athens, or Cairo to explore rich history and ancient ruins!';
    } else if (userQuery.includes('nature') || userQuery.includes('forest') || userQuery.includes('wildlife')) {
        response = 'For beautiful nature, you can visit Costa Rica, the Amazon Rainforest, or the Canadian Rockies!';
    } else if (userQuery.includes('city') || userQuery.includes('urban') || userQuery.includes('culture')) {
        response = 'Cities like New York, Tokyo, or Paris might be perfect for you, with endless urban adventures!';
    } else {
        response = 'That sounds interesting! How about exploring destinations in Europe, Asia, or South America?';
    }

   
    responseContainer.style.display = 'block';
    responseContainer.textContent = response;
});


