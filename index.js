const boxesSet = () => 
{
    let wrapperRef = $('.wrapper');
    mocktails.forEach((mocktail)=>{
        let boxMarkup= ` <div class="box">
         <img class="mocktail_pic" src="images/${mocktail.drink.toLowerCase()}.png" />
        <p class="drink"></p>
      </div>`;
      wrapperRef.append(boxMarkup);
    }
    );
}

const showInfo = () =>
{
    boxesSet();
    jQuery.each($(".box"), drinksInfo);
    $(".box").on("click", function () 
    {
        let indexDrinks = $(".box").index(this);
        $(this).find("p.drink").text(mocktails[indexDrinks].calories+ " Calories " );
    });
    $(".box").on("mouseover", function () {
        let indexDrinks = $(".box").index(this);
        $(this).find("p.drink").text(mocktails[indexDrinks].ingrediants 
          );
    });
    $(".box").on("mouseout", function () {
        let indexDrinks = $(".box").index(this);
    
        $(this).find("p.drink").text(mocktails[indexDrinks].drink);
        
      });
    };
    const drinksInfo = (index) => {
        console.log(mocktails[index].drink);
        $(".drink").eq(index).text(mocktails[index].drink);
    };
    $(document).ready(showInfo);
