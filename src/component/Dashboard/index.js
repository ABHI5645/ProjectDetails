import React,{useEffect,useState} from 'react'



import { ListGroup, Badge } from 'react-bootstrap';




function Dashboard() {
  const [projects, setProjects] = useState([]);
 

  useEffect(() => {
    fetch('https://mocki.io/v1/52bc7d59-f3dc-4877-85a2-d639b26c5f2d')
      .then(response => response.json())
      .then(data => setProjects(data.projects))
    



  }, []);
  

  
  
  console.log(projects);
  const getStatusColor = (status) => {
    if (status === 'completed') {
      return 'success';
    } else if (status === 'in progress') {
      return 'warning';
    } else if (status === 'overdue') {
      return 'danger';
    } else {
      return 'secondary';
    }
  };
  


  
  
  return (
    <div>


        <ListGroup>
      {projects.map((project) => (
        <ListGroup.Item key={project.id}
       
        >
          <div className="d-flex justify-content-between">
            <h5>{project.name}</h5>
            <span className={`badge bg-${getStatusColor(project.status)}`}>{project.status}</span>
          </div>
          <p>Start date: {project.startDate}</p>
          <p>End date: {project.endDate}</p>
        </ListGroup.Item>
      ))}
   
    </ListGroup>
      






    </div>
   
  )
}

export default Dashboard
