import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface BlogEditorProps {
  onSave: (content: string) => void;
}

const NewPost: React.FC<BlogEditorProps> = ({ onSave }) => {
  const [content, setContent] = useState('');

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        placeholder="Write your blog post here..."
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NewPost;
