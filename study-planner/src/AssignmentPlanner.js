import React, { useState } from 'react';

export default function AssignmentPlanner() {
    const [assignmentName, setAssignmentName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignmentList, setAssignmentList] = useState([]);
    const [isExam, setIsExam] = useState(false);

    function addAssignment() {
        if (assignmentName.trim() === '' || dueDate.trim() === '') {
            return;
        }

        const newAssignment = {
            key: Math.random().toString(),
            name: assignmentName,
            due: dueDate,
            exam: isExam
        };

        const updatedList = [...assignmentList, newAssignment];

        updatedList.sort((a, b) => new Date(a.due) - new Date(b.due));

        setAssignmentList(updatedList);
        setAssignmentName('');
        setDueDate('');
        setIsExam(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Assignment Planner</Text>

            {assignmentList.length > 0 && (
                <View style={styles.nextDueBox}>
                    <Text style={styles.nextDueTitle}>Due Next:</Text>
                    <Text style={assignmentList[0].exam ? styles.boldText : styles.normalText}>
                        {assignmentList[0].name} - {assignmentList[0].due}
                    </Text>
                </View>
            )}

            <TextInput
                style={styles.input}
                placeholder="Enter assignment name"
                value={assignmentName}
                onChangeText={setAssignmentName}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter due date (YYYY-MM-DD)"
                value={dueDate}
                onChangeText={setDueDate}
            />

            <View style={styles.buttonSpace}>
                <Button
                    title={isExam ? "Marked as Exam/Test" : "Mark as Exam/Test"}
                    onPress={() => setIsExam(!isExam)}
                />
            </View>

            <View style={styles.buttonSpace}>
                <Button title="Add Assignment" onPress={addAssignment} />
            </View>

            <FlatList
                data={assignmentList}
                renderItem={({ item }) => (
                    <View style={styles.assignmentItem}>
                        <Text style={item.exam ? styles.boldText : styles.normalText}>
                            {item.name}
                        </Text>
                        <Text style={styles.dateText}>Due: {item.due}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    nextDueBox: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 20
    },
    nextDueTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12
    },
    buttonSpace: {
        marginBottom: 12
    },
    assignmentItem: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 10
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 18
    },
    dateText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4
    }
});