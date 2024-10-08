document.querySelectorAll('.plus-btn').forEach(btn => 
    btn.onclick = () => {
      let input = btn.parentNode.querySelector('input');
      input.value = parseInt(input.value) + 1;
    }
  );
  
  document.querySelectorAll('.minus-btn').forEach(btn => 
    btn.onclick = () => {
      let input = btn.parentNode.querySelector('input');
      if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    }
  );
  
  document.querySelectorAll('.delete-btn').forEach(btn => 
    btn.onclick = () => btn.closest('.item').remove()
  );
  
  document.querySelectorAll('.like-btn').forEach(btn => 
    btn.onclick = () => btn.classList.toggle('is-active')
  );
  