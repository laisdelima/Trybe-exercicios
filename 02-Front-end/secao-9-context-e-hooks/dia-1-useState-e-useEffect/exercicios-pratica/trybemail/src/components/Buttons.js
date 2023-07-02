import PropTypes from 'prop-types';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function Buttons({ read, unread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ read }
      >
        <img src={ readIcon } alt="" />
        Marcar todas como lidas
      </button>
      <button
        type="button"
        onClick={ unread }
      >
        <img src={ unreadIcon } alt="" />
        Marcar todas como não lidas
      </button>
    </div>
  )
}

Buttons.propTypes = {
  read: PropTypes.func.isRequired,
  unread: PropTypes.func.isRequired,
};

export default Buttons;
