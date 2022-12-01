import { useNavigate } from 'react-router-native';
import CreateReviewForm from './CreateReviewForm';
import useCreateReview from './hooks/useCreateReview';

const CreateReviewContainer = () => {
    const [newReview] = useCreateReview();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        try {
            const ratingNumber = parseInt(rating);
            // eslint-disable-next-line no-unused-vars
            const { data } = await newReview({ ownerName, repositoryName, rating: ratingNumber, text });
            navigate("../");
        } catch (error) {
            console.error({ error });
        }
    };

    return (
        <CreateReviewForm onSubmit={onSubmit} />
    );
};


export default CreateReviewContainer;