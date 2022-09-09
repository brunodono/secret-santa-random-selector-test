import shuffle from "just-shuffle";

export function selectSecretSanta (participants: string[]) {
    const totalParticipants = participants.length;
    const randomized = shuffle(participants)
    const result = new Map<string, string>();
    for (let index = 0; index < totalParticipants; index++) {
        const indexSecretSanta = index === (totalParticipants - 1) ? 0 : index + 1;
        result.set(randomized[index], randomized[indexSecretSanta]); 
    }
    return result
}