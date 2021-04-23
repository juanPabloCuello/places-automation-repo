import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.mercadolibre.com.mx/`;  // specify the start page


//This test will buy the last iteam on my purchases with the last direction setted
test('buy the last iteam on my purchases with the last direction setted', async t => {

    await t
        .click('#nav-header-menu > a:nth-child(3)')

    await t
    .typeText('#user_id', 'mayco.barale@mercadolibre.com')

    await t
        .click('#login_user_form > div.login-form__actions > button > span')

    await t
    .typeText('#password', 'qatest5093')

    await t
    .click('#login_user_form > div.login-form__actions > button > span')

    await t
    .click('#root-app > div.app-wrapper.app-wrapper--menu-expanded.app-wrapper--menu-expanded-static > div.page-wrapper > div > div.purchases-list-container > div > div.purchases-container > div:nth-child(4) > div:nth-child(1) > div.myml-ui-item-row.u-myml-clearfix > div.myml-ui-item.u-media-object > div.myml-ui-item__info.u-media-object__fill > a')
    
    await t
    .click('#root-app > div > div.ui-pdp-container.ui-pdp-container--pdp > div > div.ui-pdp-container__col.col-1.ui-pdp-container--column-right.mt-16.pr-16 > div.ui-pdp-container__row.ui-pdp-component-list.pr-16.pl-16 > div > div.ui-pdp-container__row.ui-pdp-container__row--main-actions > form > div > button.andes-button.andes-button--loud > span')
    
    await t
    .click('#app-container > div > div > div > div.ui-list-footer > div.list-submit-button > button')
    
    await t
    .click('#app-container > div > section > div > form > article.ui-list.ui-panel--raised.panel-stored-cards > div > ul > li:nth-child(2) > div > label > div.ui-radio-element > input.ui-radio__input')

    await t
    .click('#app-container > div > section > div > form > div.ui-list-footer > div.list-submit-button > button')
    
    const securityCode = Selector('#securityCode');
    const securityCodeSecond = Selector('#app-container > div > section > div > form > article > div > ul > li:nth-child(1) > div > label > div.ui-radio-element > input');

    if (await securityCode.visible) {
        await t.click(securityCode);
    } else {
        if (await securityCodeSecond.visible)
            await t.click(securityCodeSecond);
    }

    //boton de continuar derecho
    const continueButton = Selector('#app-container > div > div > div.new-card__panel > div > section > div > form > div.ui-form__actions > button');

    //boton de continuar si va por cuotas
    const continueButtonCuotes = Selector('#app-container > div > section > div > div.ui-list-footer > div.list-submit-button > button');

    if (await continueButton.visible) {
        await t.click(continueButton);
    } else {
        if (await continueButtonCuotes.visible)
            await t.click(continueButtonCuotes);
    }

//boton continuar en tarjeta de credito
    const continueButtonCC = Selector('#aside-container > div > div > aside > section > form > button');
    const continueButtonCCOther = Selector('#app-container > div > div > div.new-card__panel > div > section > div > form > div.ui-form__actions > button');

    if (await continueButtonCC.visible) {
        await t.click(continueButtonCC);
    } else {
        if (await continueButtonCCOther.visible)
            await t
                .typeText('#securityCode', '1234')

        await t.click(continueButtonCCOther);
    }

    // boton confirmar compra en checkout/direct/buying/
    const confirmButton = Selector('#root-app > div > div.main-container > div.container > div > div > a > span > span');
    const confirmButtonOther = Selector('#aside-container > div > div > aside > section > form > button > span.aside-button__text');

    if (await confirmButton.visible) {
        await t.click(confirmButton);
    } else {
        if (await confirmButtonOther.visible)
            await t.click(confirmButtonOther);
    }

//click en "Ver en mis compras" /checkout/direct/buying/
  //  await t
    //    .click('#root - app > div > div.main - container > div.container > div.bf - ui - card.bf - ui - card--flat > div.button - container.button - container--vertical.button - container--transparent > a > span > span')

    // Use the assertion to check if the actual header text is equal to the expected one
    //const headerText = await Selector('#root-app > div.app-wrapper.app-wrapper--menu-expanded.app-wrapper--menu-expanded-static > div.page-wrapper > div > div.purchases-vpp-container > header > h1').textContent;
  //  console.log("NRO DE ORDEN:");
//    console.log(headerText);

        
});