/*import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import '../styles/achivements.css'

const Achievements = () => {
    const { isAdmin } = useAuth();
    const [achievements, setAchievements] = useState([]);
    const [newAchievement, setNewAchievement] = useState({
        title: '',
        description: '',
        date_achieved: '',
        image: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Track if we are editing an achievement
    const [editId, setEditId] = useState(null); // Store the ID of the achievement being edited

    const apiUrl = 'http://localhost:5000/auth/achievements';

    // Fetch achievements
    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                console.log('API Response:', response.data);
                setAchievements(response.data);
            })
            .catch((error) => console.error('Error fetching achievements:', error));
    }, []);

    // Handle form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAchievement({ ...newAchievement, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setNewAchievement({ ...newAchievement, image: file });
    };

    // Handle adding a new achievement
    const handleAddAchievement = (e) => {
        e.preventDefault();
        const { title, description, date_achieved, image } = newAchievement;
        if (!title || !description || !date_achieved || !image) {
            alert('All fields are required.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date_achieved', date_achieved);
        formData.append('image', image);

        setIsSubmitting(true);
        axios.post(apiUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then((response) => {
                setAchievements([...achievements, response.data]);
                setNewAchievement({ title: '', description: '', date_achieved: '', image: null });
            })
            .catch((error) => console.error('Error adding achievement:', error))
            .finally(() => setIsSubmitting(false));
    };

    // Handle editing an achievement
    const handleEditAchievement = (achievement) => {
        setNewAchievement({
            title: achievement.title,
            description: achievement.description,
            date_achieved: achievement.date_achieved,
            image: null, // Don't load the current image, user will upload a new one if they want
        });
        setIsEditing(true);
        setEditId(achievement.id); // Store the ID of the achievement being edited
    };

    // Handle updating an achievement
    const handleUpdateAchievement = (e) => {
        e.preventDefault();
        const { title, description, date_achieved, image } = newAchievement;
        if (!title || !description || !date_achieved) {
            alert('All fields are required.');
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('date_achieved', date_achieved);
        if (image) {
            formData.append('image', image);
        }

        setIsSubmitting(true);
        axios.put(`${apiUrl}/${editId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then((response) => {
                const updatedAchievements = achievements.map((achievement) =>
                    achievement.id === editId
                        ? { ...achievement, ...newAchievement, image: image ? `Public/Achievements/${image.name}` : achievement.image }
                        : achievement
                );
                setAchievements(updatedAchievements);
                setNewAchievement({ title: '', description: '', date_achieved: '', image: null });
                setIsEditing(false);
                setEditId(null);
            })
            .catch((error) => console.error('Error updating achievement:', error))
            .finally(() => setIsSubmitting(false));
    };

    // Handle deleting an achievement
    const handleDeleteAchievement = (id) => {
        if (window.confirm('Are you sure you want to delete this achievement?')) {
            axios.delete(`${apiUrl}/${id}`)
                .then(() => {
                    setAchievements(achievements.filter((achievement) => achievement.id !== id));
                })
                .catch((error) => console.error('Error deleting achievement:', error));
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Achievements</h1>

            {achievements.length > 0 ? (
                <div className="row">
                    {achievements.map((achievement) => (
                        <div className="col-md-4" key={achievement.id}>
                            <div className="card mb-4">
                                {achievement.image ? (
                                    <img
                                        src={`http://localhost:5000/${achievement.image}`} // Corrected image path
                                        alt={achievement.title || 'Achievement Image'}
                                        className="card-img-top"
                                    />
                                ) : (
                                    <div className="card-img-top text-center bg-light">
                                        <p>No Image</p>
                                    </div>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{achievement.title || 'No Title'}</h5>
                                    <p className="card-text">{achievement.description || 'No Description Available'}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Date Achieved: {achievement.date_achieved || 'Unknown'}
                                        </small>
                                    </p>
                                    {isAdmin && (
                                        <div className="d-flex justify-content-between">
                                            <button
                                                className="btn btn-warning"
                                                onClick={() => handleEditAchievement(achievement)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDeleteAchievement(achievement.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center">No achievements yet.</p>
            )}

            {isAdmin && (
                <div className="mt-4">
                    <h2>{isEditing ? 'Edit Achievement' : 'Add Achievement'}</h2>
                    <form
                        onSubmit={isEditing ? handleUpdateAchievement : handleAddAchievement}
                        encType="multipart/form-data"
                    >
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                value={newAchievement.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                className="form-control"
                                value={newAchievement.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date_achieved">Date Achieved</label>
                            <input
                                type="date"
                                name="date_achieved"
                                id="date_achieved"
                                className="form-control"
                                value={newAchievement.date_achieved}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Upload Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-3"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : isEditing ? 'Update Achievement' : 'Add Achievement'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Achievements;
*/

import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import '../styles/achivements.css';

const Achievements = () => {
  const { isAdmin } = useAuth();
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState({
    title: '',
    description: '',
    date_achieved: '',
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success');

  const apiUrl = 'http://localhost:5000/auth/achievements';

  // Fetch achievements
  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setAchievements(response.data);
      })
      .catch((error) => {
        setNotification('Error fetching achievements!');
        setNotificationType('error');
      });
  }, []);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAchievement({ ...newAchievement, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewAchievement({ ...newAchievement, image: file });
  };

  // View achievement details in modal
  const handleViewAchievement = (achievement) => {
    setSelectedAchievement(achievement);
  };

  // Close the modal
  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  // Handle adding a new achievement
  const handleAddAchievement = (e) => {
    e.preventDefault();
    const { title, description, date_achieved, image } = newAchievement;
    if (!title || !description || !date_achieved || !image) {
      alert('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date_achieved', date_achieved);
    formData.append('image', image);

    setIsSubmitting(true);
    axios.post(apiUrl, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        setAchievements([...achievements, response.data]);
        setNewAchievement({ title: '', description: '', date_achieved: '', image: null });
        setNotification('Achievement added successfully!');
        setNotificationType('success');
      })
      .catch((error) => {
        setNotification('Error adding achievement!');
        setNotificationType('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  // Handle editing an achievement
  const handleEditAchievement = (achievement) => {
    setNewAchievement({
      title: achievement.title,
      description: achievement.description,
      date_achieved: achievement.date_achieved,
      image: null, 
    });
    setIsEditing(true);
    setEditId(achievement.id); 
  };

  // Handle updating an achievement
  const handleUpdateAchievement = (e) => {
    e.preventDefault();
    const { title, description, date_achieved, image } = newAchievement;
    if (!title || !description || !date_achieved) {
      alert('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date_achieved', date_achieved);
    if (image) {
      formData.append('image', image);
    }

    setIsSubmitting(true);
    axios.put(`${apiUrl}/${editId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        const updatedAchievements = achievements.map((achievement) =>
          achievement.id === editId
            ? { ...achievement, ...newAchievement, image: image ? `Public/Achievements/${image.name}` : achievement.image }
            : achievement
        );
        setAchievements(updatedAchievements);
        setNewAchievement({ title: '', description: '', date_achieved: '', image: null });
        setIsEditing(false);
        setEditId(null);
        setNotification('Achievement updated successfully!');
        setNotificationType('success');
      })
      .catch((error) => {
        setNotification('Error updating achievement!');
        setNotificationType('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  // Handle deleting an achievement
  const handleDeleteAchievement = (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      axios.delete(`${apiUrl}/${id}`)
        .then(() => {
          setAchievements(achievements.filter((achievement) => achievement.id !== id));
          setNotification('Achievement deleted successfully!');
          setNotificationType('success');
        })
        .catch((error) => {
          setNotification('Error deleting achievement!');
          setNotificationType('error');
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Achievements</h1>

      {/* Notification Pop-up */}
      {notification && (
        <div className={`alert alert-${notificationType} alert-dismissible fade show`} role="alert">
          {notification}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      {achievements.length > 0 ? (
        <div className="row">
          {achievements.map((achievement) => (
            <div className="col-md-4" key={achievement.id}>
              <div className="card mb-4">
                {achievement.image ? (
                  <img
                    src={`http://localhost:5000/${achievement.image}`} 
                    alt={achievement.title || 'Achievement Image'}
                    className="card-img-top"
                  />
                ) : (
                  <div className="card-img-top text-center bg-light">
                    <p>No Image</p>
                  </div>
                )}
                <div className="card-body">
                  <h5 className="card-title">{achievement.title || 'No Title'}</h5>
                  <p className="card-text">{achievement.description || 'No Description Available'}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Date Achieved: {achievement.date_achieved || 'Unknown'}
                    </small>
                  </p>
                  <button
                    className="btn btn-info"
                    onClick={() => handleViewAchievement(achievement)}
                    style={{ cursor: 'pointer' }} // Ensure pointer cursor on "View" button
                  >
                    View
                  </button>
                  {isAdmin && (
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEditAchievement(achievement)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteAchievement(achievement.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No achievements yet.</p>
      )}

      {/* View Achievement Modal */}
      {selectedAchievement && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedAchievement.title}</h5>
                <button type="button" className="close" onClick={handleCloseModal} style={{ cursor: 'pointer' }}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <p>{selectedAchievement.description}</p>
                <p><strong>Date Achieved:</strong> {selectedAchievement.date_achieved}</p>
                {selectedAchievement.image && (
                  <img
                    src={`http://localhost:5000/${selectedAchievement.image}`}
                    alt="Achievement Image"
                    className="img-fluid"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form for adding/editing achievements */}
      {isAdmin && (
        <div className="mt-4">
          <h2>{isEditing ? 'Edit Achievement' : 'Add Achievement'}</h2>
          <form
            onSubmit={isEditing ? handleUpdateAchievement : handleAddAchievement}
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={newAchievement.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                value={newAchievement.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date_achieved">Date Achieved</label>
              <input
                type="date"
                name="date_achieved"
                id="date_achieved"
                className="form-control"
                value={newAchievement.date_achieved}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : isEditing ? 'Update Achievement' : 'Add Achievement'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Achievements;

