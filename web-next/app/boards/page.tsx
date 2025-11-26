'use client';
import Button from "../components/atoms/Button";

export default function BoardsPage() {
  const user = { name: "John Doe" }; // Replace with actual user data

  const boards = [
    { id: 1, title: "Board 1", description: "Description 1" },
    { id: 2, title: "Board 2", description: "Description 2" },
  ];

  const boardList = boards.map((board) => (
    <tr key={board.id} className="hover:bg-gray-50">
        <td className="border border-gray-200 p-4 text-center">{board.title}</td>
        <td className="border border-gray-200 p-4 text-center">{board.description}</td>
        <td className="border border-gray-200 p-4 text-center">
          <Button href={`/boards/${board.id}`}>Voir le board</Button>
        </td>
    </tr>
  ));

  return (
    <div>
        <h1>Hello {user.name}</h1>
        <Button href="/boards/new">Créer un board</Button>
        <table className="mt-4 w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">{boardList}</tbody>
        </table>
    </div>
  );
}