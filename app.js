$('#getUsers').on('click', function(){
 
  return $.ajax({
    method: 'GET',
    url: 'http:\/\/reqr.es/api/users?page=1',
    success: function(response){
        console.log(response);
        insertData(response.data)
    }
  })  
})

var insertData = function(arr){
  for (var i = 0; i < arr.length; i++){
    $('#userInfo' + (i + 1)).html('<div>' +
      'User Info: ' + 
      '<li>' +
      'First Name: ' + arr[i].first_name +
      '</li>' +
      '<li>' +
      'Last Name: ' + arr[i].last_name +
      '</li>' + 
      '<hr>' +
      '</div'
    )   
  };
}

$('#addUser').on('click', function(e){
  e.preventDefault();
  var userName = $('#name').val();
  var userJobs = $('#job').val();
  var newDate = new Date();
  
  return $.ajax({
    type: 'POST',
    url: 'http://reqr.es/api/users',
    data: {userName, userJobs},
    success: function(response) {
      $('#recentUser').html(
        '<li>' +
          'name: ' + response.userName +
        '</li>' +
        '<li>' +
          'job: ' + response.userJobs +
        '</li>' +
        '<li>' +
          'id: ' + response.id +
        '</li>' +
        '<li>' +
          'created at: ' + newDate +
        '</li>'
      )
    }
  })
})