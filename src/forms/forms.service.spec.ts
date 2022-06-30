import { InternalServerErrorException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import TestUtil from './common/test/TestUtil'
import { Forms } from './entities/forms.entity'
import { FormsService } from './forms.service'

describe('FormsService', () => {

    const mockRepository = {
        create: jest.fn(),
        save: jest.fn()
    }
    let service: FormsService

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FormsService,
                {
                    provide: getRepositoryToken(Forms),
                    useValue: mockRepository
                }
            ]
        }).compile()

        service = module.get<FormsService>(FormsService)
    })

    // Clear all mocks
    beforeEach(() => {
        mockRepository.create.mockReset()
        mockRepository.save.mockReset()
    })

    describe('When create Forms', () => {
        it('should return when create a new form', async () => {
            const formResult = TestUtil.getValidForm()
            mockRepository.save.mockReturnValue(formResult)
            mockRepository.create.mockReturnValue(formResult)
            const saveForm = await service.createForms(formResult)

            expect(saveForm).toMatchObject(formResult)
            expect(mockRepository.create).toHaveBeenCalledTimes(1)
            expect(mockRepository.save).toHaveBeenCalledTimes(1)
        })

        it('should return axception when does not save a form', async () => {
            const formResult = TestUtil.getValidForm()
            mockRepository.save.mockReturnValue(null)
            mockRepository.create.mockReturnValue(null)

            await service.createForms(formResult).catch((err) => {
                expect(err).toBeInstanceOf(InternalServerErrorException)
                expect(err).toMatchObject({
                    message: 'There was an error creating the form. Try again.'
                })
            })

            expect(mockRepository.create).toHaveBeenCalledTimes(1)
            expect(mockRepository.save).toHaveBeenCalledTimes(1)
        })
    })

})
