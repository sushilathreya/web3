import styles from './AddressInput.module.css';
import {useRef} from 'react'; 

function AddressInput(props) {
    const addressInputRef = useRef();
    function submitHandler (e) {
        e.preventDefault();
        const addressInput = addressInputRef.current.value;
        props.inputAddress(addressInput);
        addressInputRef.current.value='';
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter your wallet address" className={styles.input} ref={addressInputRef}></input>
            </form>
        </div>
        
        
    )
}

export default AddressInput;