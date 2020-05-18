$(document).ready(function(){
    
    $('.btnAdd').click(function(){
        let firstInfo = $('#1').val()
        let secondInfo = $('#2').val()
        let thirdInfo = $('#3').val()
        let fourthInfo = $('#4').val()

        
        if(firstInfo && secondInfo && thirdInfo && fourthInfo){
        let id = Date.now()
        
        $('tbody').append(
                  `<tr id='card-${id}' >
                      <td>${firstInfo}</td>
                      <td>${secondInfo}</td>
                      <td>${thirdInfo}</td>
                      <td>${fourthInfo}</td>
                      <td>       
                        <i class="fas fa-trash-alt" id='card-${id}'></i>
                      </td>
                      <td>        
                        <i class="fas fa-pen" id='card-${id}'></i>
                      </td>
                      <td>
                      <i class="fa fa-user-circle" id='card-${id}'></i>
                      </td>
                  </tr>`  
                )
                // $('tr').attr('onClick' , function(id){ funcDelete(id)})

                $('#1').val('')
                $('#2').val('')
                $('#3').val('')
                $('#4').val('')
        }
        else{
            alert('Введите все данные!')
        }
    })
    
    $(document).on('click','.fa-trash-alt', function(event){
        funcDelete(event.target.id)
    })
    let funcDelete = function(id){
        $(`#${id}`).fadeOut(function(){
            $(`#${id}`).remove()
        })
    }


    $('.KPI').click(function(){
        $('.KPI').fadeOut()
        $('.list').fadeOut()
        $('.collectModal').fadeOut()
        $('body').append(
            `<div class="list-2">
                <table>
                    <thead>
                        <tr>
                            <th>Таски</th>
                            <th>Посещаемость</th>
                            <th>Активность</th>
                            <th>Проект</th>
                            <th>Кахут</th>
                            <th>Кахатон</th>
                            <th>Общий Балл</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>`
        )
    })

    $(document).on('click', '.fa-user-circle', function(event){
        $('.KPI').fadeOut()
        $('.list').fadeOut()
        viewPerson(event.target.id)
    })
    let viewPerson = function(id){
        console.log($(`#${id}`))
        $('.modalTbody').append($(`#${id}`))

        $('.fa-compress').click(function(){
            $('.KPI').fadeIn()
            $('.list').fadeIn()
            $('body').fadeIn(function(){$('body').toggleClass('bodied')})
            $('.collectModal').css('opacity','0')
        })

        
    }




    


    


})