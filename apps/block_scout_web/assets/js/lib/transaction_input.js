import $ from 'jquery'

$('#show-raw-transaction-input').click(function(){
  $('#show-raw-transaction-input').hide();
  $('#raw-transaction-input').show();

  return false;
});

$('#hide-raw-transaction-input').click(function(){
  $('#show-raw-transaction-input').show();
  $('#raw-transaction-input').hide();

  return false
})
