import { SPostSetting } from "./Post.style";


interface IPostSettingsProps {
  onEditClick?: () => void,
  onDeleteClick?: () => void,
}

export const PostSettings = ({ onEditClick, onDeleteClick }: IPostSettingsProps) => {
  return (
    <SPostSetting>
      <span onClick={onEditClick}>Изменить</span>
      <span onClick={onDeleteClick}>Удалить</span>
    </SPostSetting>
  );
};
