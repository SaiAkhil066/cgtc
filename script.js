function myFunction ()
{
    var input, filter, ul, a, i, txtValue;

    input = document.getElementById ('myInput');

    filter = input.value.toUpperCase ();

    document.getElementById ("myUL");

    li = ul.getElementByTagName('li');


    // Loop through all list items, and hide those who don't match the search query

    for (i = 0; i < li.length; i ++) 
    {
        a = li [i]. getElementByTagName("a") [0];

        txtValue = a.textContent || a.innertext;

        if (txtValue.toUpperCase(). indexOf(filter) > -1) 
        {
            
            li[i].style.display = "";
       
        } else {
            
            li[i].style.display = "none";
        }
    }
}