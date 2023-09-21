import { useRef } from 'react';
import './edit.css'

export default function Edit({ post, save, cancel, id }) {
    const text = useRef(post);
    function clickSave(e) {
        save(text.current.value, e.target.id);
    }
    function clickCancel(e) {
        cancel(e.target.id);
    }
    return (
        <section className='edit'>
            <textarea
            ref={text}
            defaultValue={post}
            type="text"
            className="input__input edit__input"
          ></textarea>
          <div className='edit__btns'>
            <button className='edit__btn edit__btn__save' onClick={clickSave} id={id} >Save</button>
            <button className='edit__btn edit__btn__cancel' onClick={clickCancel} id={id} >Cancel</button>
          </div>

        </section>
    );
}