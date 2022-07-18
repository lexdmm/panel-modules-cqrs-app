import { Form } from '../../entities/form.entity'

export default class TestUtil {
    static getValidForm(): Form {
        const forms = new Form()

        forms.id = '1'
        forms.email = 'email_test@test.com'
        forms.name = 'Form Name'
        forms.description = 'Form Description'
        forms.isModule = false
        forms.createdAt = new Date()
        forms.updatedAt = new Date()
        forms.deletedAt = new Date()

        return forms
    }

    async createForms(): Promise<Form> {
        return TestUtil.getValidForm()
    }
}
