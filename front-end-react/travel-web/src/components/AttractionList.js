import React from 'react';
import PropTypes from 'prop-types';
import ListSort from './ListSort';
import { Button } from 'antd';
import '../styles/AttractionList.css';

const dummyData = [
    { place: 'place A'},
    { place: 'place B'},
    { place: 'place C'},
    { place: 'place D'},
  ];

export class AttractionList extends React.Component {
    static propTypes = {
        className: PropTypes.string,
      };
    
      static defaultProps = {
        className: 'list-sort-demo',
      };

    render() {
        const childrenToRender = dummyData.map((item, index) => {
            const {place} = item;
            return (
                <div key={index} className={`${this.props.className}-list`}>
                    <div>{place} 
                    <Button type="primary">start</Button>
                    </div>
                </div>
            );   
        });
        return (
            <div className={`${this.props.className}-div`}>
                <div className={`${this.props.className}-wrapper`}>
                    <ListSort
                        dragClassName="list-drag-selected"
                        appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}>
                        {childrenToRender}
                    </ListSort>
                </div>
            </div>
        );
    }
}

