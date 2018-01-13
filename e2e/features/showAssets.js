describe('Sick Gainz Home Screen', () => {

  const assets = () => element(by.id('Assets Value'))
  const doneWithKeyboardButton = () => element(by.label('Done').and(by.type('UIButtonLabel')))

  it('displays a $0.00 assets value as an empty state', async () => {
    await expect(element(by.label('Assets'))).toExist()
    await expect(element(by.label('$0.00')).atIndex(1)).toExist()
  })

  it('disallows directly editing the assets value', async () => {
    await expect(element(by.id('Assets Value'))).toNotExist()
  })
})
