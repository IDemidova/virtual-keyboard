'use strict';

function renderPopup() {
    return `
    <div class='popup'>
        <button class='close'>&#10006</button>
        <h2 class='heading'>Функциональная реализация:</h2>
        <p class='text'>1. Клик по любой кнопке печатного символа (включая Space, Tab и Enter) печатает его в поле ввода;</p>
        <p class='text'>2. Backspace удаляет символ перед кареткой, Delete - после нее (работают в т.ч. для выделенной области);</p>
        <p class='text'>3. Стрелки &#129092 и &#129094 перемещают каретку посимвольно, &#129093 и &#129095 - в начало и конец текста;</p>
        <p class='text'>4. Продолжительное нажатие на кнопки печатных символов, удаления и стрелок выполняет действие, пока кнопка не будет отпущена;</p>
        <p class='text'>5. CapsLock и любой Shift можно зажать на вирутальной клавиатуре, кликнув по ним;</p>
        <p class='text'>6. Left Shift отжимается при нажатии на любую другую кнопку, Right Shift остается зажатым, пока по нему не кликнут;</p>
        <p class='text'>7. Сменить язык можно при помощи комбинации Left Shift + Alt в т.ч. на виртуальной клавиатуре;</p>
        <p class='text'>8. Кнопка РУС/ENG отображает текущий язык виртуальной клавиатуры, кликнув по ней также можно его сменить;</p>
        <p class='text'>9. Текущие языковые настройки виртуальной клавиатуры сохраняются при обновлении страницы;</p>
        <p class='text'>10. Кнопка &#128427 сохраняет текущий текст, после чего он будет отображаться в поле ввода при обновлении страницы;</p>
        <p class='text'>11. Кнопка &#128465 удаляет текущий текст из поля ввода, а также ранее сохраненный текст.</p>
        <i class='readme'>Информацию о технической реализации можно найти в README.</i>
    </div>`;
}

export { renderPopup };