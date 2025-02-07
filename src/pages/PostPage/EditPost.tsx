import Modal from 'react-modal';
import * as yup from "yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppInput } from '../../components/UI/AppInput/AppInput';
import { AppButton } from '../../components/UI/AppButton/AppButton';
import { SPostForm } from './PostPage.style';

interface IEditPostProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditPostFormScheme = yup.object({
  new_text: yup
    .string()
    .min(4, "Введите минимум 4 символа")
    .required("Поле обязательно для ввода")
});

export const EditPost = ({ isOpen, onClose }: IEditPostProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditPostFormScheme),
    defaultValues: {
      new_text: ""

    },
  });

  const handleAddPostFormSubmit: SubmitHandler<{ new_text: string }> = (formData) => {

    if (formData) {
      const payload = {
        post_id: 0,
        new_text: formData.new_text,
      }
      console.log(payload);

    }
  }
  return (
    <Modal isOpen={isOpen}>
      <SPostForm onSubmit={() => { }}>
        <Controller
          name="new_text"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите текст поста"
              inputType="text"
              inputValue={field.value}
              isError={Boolean(errors.new_text)}
              {...field}
            />
          )}
        />

        <div className='btns'>
          <AppButton
            buttonText="Сохранить"
            buttonType="submit"
            isDisabled={false}
          />
          <AppButton
            buttonText="Отменить"
            buttonType="button"
            isDisabled={false}
            buttonClick={onClose}
          />
        </div>
      </SPostForm>
    </Modal>

  );
};
