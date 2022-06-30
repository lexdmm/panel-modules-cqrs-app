import { Forms } from '../../entities/forms.entity'

export default class TestUtil {
    static getValidForm(): Forms {

        const forms = new Forms()

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

    async createForms(): Promise<Forms> {
        return TestUtil.getValidForm()
    }
}
