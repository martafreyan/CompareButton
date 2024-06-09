import { useState } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { changeSellersComparison } from '../../actions/sellers_comparison';
import { ModalConfirmation } from '../../UI/ModalConfirmation/ModalConfirmation';
import { ReactComponent as CloseIcon } from '../../img/ui/close_icon.svg';

import classes from './CompareButton.module.css';
//import { routes } from '../../providers/AppRoutes/AppRoutes.data';

const CompareButton = ({
  sellers_comparison: { sellersInComparsion },
  changeSellersComparison,
  className = ''
}) => {
  const [isOpen, setOpen] = useState(false);

  const onApprove = () => {
    changeSellersComparison([]);
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  if (!sellersInComparsion.length) return null;

  return (
    <div className={`${classes.compareBtnBox} ${className}`}>
      <div className={classes.compareBtn}>
        {/* <Link to={routes.sellersComparison} className={classes.compareLink}>
          {sellersInComparsion.length} sellers in comparison
        </Link> */}
        {sellersInComparsion.length} sellers in comparison
        <CloseIcon className={classes.compareBtnIcon} onClick={openModal} />
      </div>
      <ModalConfirmation
        isOpen={isOpen}
        setOpen={setOpen}
        onApprove={onApprove}
        message="Are you sure you want to remove sellers in comparsion?"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  sellers_comparison: state.sellers_comparison
});

export default connect(mapStateToProps, {
  changeSellersComparison
})(CompareButton);
