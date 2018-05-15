import React, {Component} from 'react';
import Teacher from './Teacher';
import '../../css/teachers.scss';

class Teachers extends Component{
	render(){
		return (
			<ul className="Teachers">
				{
					this.props.data.teachers.map((item)=>{
						return <Teacher {...item}/>
					})
				}	
		</ul>
		)
	}
}

export default Teachers;