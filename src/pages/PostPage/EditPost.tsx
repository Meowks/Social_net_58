import Modal from 'react-modal';
import * as yup from "yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppInput } from '../../components/UI/AppInput/AppInput';
import { AppButton } from '../../components/UI/AppButton/AppButton';
import { SPostForm } from './PostPage.style';
import { IPost, useEditPostMutation } from "../../store/API/postApi"
import { Loader } from '../../components/Loader/Loader';
import { useEffect } from 'react';


interface IEditPostProps {
  isOpen: boolean;
  onClose: () => void;
  post: IPost;
  onEditPostSuccsess?: ()=>void;
}

const EditPostFormScheme = yup.object({
  new_text: yup
    .string()
    .min(4, "Введите минимум 4 символа")
    .required("Поле обязательно для ввода")
});

export const EditPost = ({ isOpen, onClose, onEditPostSuccsess,post }: IEditPostProps) => {

  const [editPost, { isLoading, isSuccess }] = useEditPostMutation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditPostFormScheme),
    defaultValues: {
      new_text: post.main_text,

    },
  });

  const handleEditPostFormSubmit: SubmitHandler<{ new_text: string }> = (formData) => {

    if (formData) {
      const payload = {
        post_id: post.id,
        new_text: formData.new_text,
      }
      editPost(payload)
      onClose()

    }
  }
  useEffect(()=>{
    if(isSuccess){
      // onEditPostSuccsess();
    }
  }, [isSuccess]);

  { isLoading && <Loader /> }
  return (
    <Modal isOpen={isOpen}>
      <SPostForm onSubmit={() => { handleSubmit(handleEditPostFormSubmit) }}>
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
