// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ColorBoard {
    uint8 constant public WIDTH = 7;
    uint8 constant public HEIGHT = 5;

    // Define the possible colors
    enum Color { White, Black, Red, Blue }

    // Mapping to store the color of each cell
    mapping(uint8 => mapping(uint8 => Color)) public board;

    constructor() {
        // Initialize the board with random colors
        bytes32 seed = keccak256(abi.encodePacked(block.timestamp, block.difficulty, msg.sender));

        for (uint8 x = 0; x < WIDTH; x++) {
            for (uint8 y = 0; y < HEIGHT; y++) {
                uint8 randomValue = uint8(uint256(seed) % 4); // Generate random value
                board[x][y] = Color(randomValue);
                seed = keccak256(abi.encodePacked(seed)); // Update the seed
            }
        }
    }

    // Function to query the color of a cell as a string
    function getColor(uint8 x, uint8 y) public view returns (string memory) {
        require(x < WIDTH && y < HEIGHT, "Invalid coordinates");
        return getColorName(board[x][y]);
    }

    // Internal function to get the color name
    function getColorName(Color color) internal pure returns (string memory) {
        if (color == Color.White) return "White";
        if (color == Color.Black) return "Black";
        if (color == Color.Red) return "Red";
        if (color == Color.Blue) return "Blue";
        return "Unknown";
    }
}
