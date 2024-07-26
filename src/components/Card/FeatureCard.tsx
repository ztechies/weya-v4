const FeatureCard = ({ title, description }: { title: string; description: string }) => {
    return (
        <div className="bg-[#345830] text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;