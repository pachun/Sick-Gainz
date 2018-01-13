describe('Sick Gainz Home Screen', () => {

  const cost = () => element(by.id('Cost Value'))
  const doneWithKeyboardButton = () => element(by.label('Done').and(by.type('UIButtonLabel')))

  it('displays a $0.00 cost value as an empty state', async () => {
    await expect(element(by.label('Cost'))).toExist()
    await expect(element(by.label('$0.00'))).toExist()
  })

  it('formats cost values', async () => {
    await cost().tap()
    await cost().typeText("1")
    await doneWithKeyboardButton().tap()

    await expect(element(by.label('$1.00'))).toBeVisible()

    await cost().tap()
    await cost().typeText("1.1")
    await doneWithKeyboardButton().tap()

    await expect(element(by.label('$1.10'))).toBeVisible()

    await cost().tap()
    await cost().typeText("1337.66")
    await doneWithKeyboardButton().tap()

    await expect(element(by.label('$1,337.66'))).toBeVisible()
  })

  it('rounds cost values', async () => {
    await cost().tap()
    await cost().typeText("0.555")
    await doneWithKeyboardButton().tap()

    await expect(element(by.label('$0.56'))).toBeVisible()

    await cost().tap()
    await cost().typeText("0.554")
    await doneWithKeyboardButton().tap()

    await expect(element(by.label('$0.55'))).toBeVisible()
  })
})
