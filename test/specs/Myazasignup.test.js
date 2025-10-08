describe('Account Signup Flow', () => {
    it('should fill in signup form and proceed to email verification', async () => {
        const email = await $('//android.widget.ScrollView/android.widget.EditText[1]');
        await email.setValue('test@example.com');

        const firstName = await $('//android.widget.ScrollView/android.widget.EditText[2]');
        await firstName.setValue('Jessica');

        const lastName = await $('//android.widget.ScrollView/android.widget.EditText[3]');
        await lastName.setValue('Doe');

        const password = await $('//android.widget.ScrollView/android.widget.EditText[5]');
        await password.setValue('Password123');

        const confirmPassword = await $('//android.widget.ScrollView/android.widget.EditText[6]');
        await confirmPassword.setValue('Password123');

        const checkbox = await $('android=new UiSelector().className("android.widget.CheckBox")');
        await checkbox.click();

        const nextBtn = await $('android=new UiSelector().description("Next - Email verification")');
        await nextBtn.click();

        console.log('✅ Signup flow test completed successfully!');
    });
});
