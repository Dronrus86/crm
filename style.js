﻿
const inp = document.querySelector('.inp');
const btnSearch = document.querySelector('.btn_search');


let home;
home = [

    //D2(1)

    {id: 1, floor: '3-15', queue: 1, section: 'D2'},
    {id: 2, floor: '3-15', queue: 1, section: 'D2'},
    {id: 3, floor: '3-15', queue: 1, section: 'D2'},
    {id: 4, floor: '3-15', queue: 1, section: 'D2'},
    {id: 5, floor: '3-15', queue: 1, section: 'D2'},
    {id: 6, floor: '3-15', queue: 1, section: 'D2'},
    {id: 7, floor: '3-15', queue: 1, section: 'D2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625228&cmd=show&action=showObjectInGrid&ncc=1' },
    {id: 8, floor: '3-15', queue: 1, section: 'D2'},
    {id: 9, floor: '3-15', queue: 1, section: 'D2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625226&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 10, floor: '4-15', queue: 1, section: 'D2'},
    {id: 11, floor: '4-15', queue: 1, section: 'D2'},
    {id: 12, floor: '4-15', queue: 1, section: 'D2'},
    {id: 13, floor: '4-15', queue: 1, section: 'D2'},
    {id: 14, floor: '4-15', queue: 1, section: 'D2',finishing: true, url: '' },
    {id: 15, floor: '4-15', queue: 1, section: 'D2'},
    {id: 16, floor: '4-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 17, floor: '4-15', queue: 1, section: 'D2'},
    {id: 18, floor: '4-15', queue: 1, section: 'D2', finishing: true, url: ''},

    {id: 19, floor: '5-15', queue: 1, section: 'D2'},
    {id: 20, floor: '5-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 21, floor: '5-15', queue: 1, section: 'D2'},
    {id: 22, floor: '5-15', queue: 1, section: 'D2'},
    {id: 23, floor: '5-15', queue: 1, section: 'D2'},
    {id: 24, floor: '5-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 25, floor: '5-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 26, floor: '5-15', queue: 1, section: 'D2', finishing: true, url: '' },
    {id: 27, floor: '5-15', queue: 1, section: 'D2'},

    {id: 28, floor: '6-15', queue: 1, section: 'D2'},
    {id: 29, floor: '6-15', queue: 1, section: 'D2'},
    {id: 30, floor: '6-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 31, floor: '6-15', queue: 1, section: 'D2'},
    {id: 32, floor: '6-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 33, floor: '6-15', queue: 1, section: 'D2'},
    {id: 34, floor: '6-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 35, floor: '6-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 36, floor: '6-15', queue: 1, section: 'D2', finishing: true, url: ''},

    {id: 37, floor: '7-15', queue: 1, section: 'D2'},
    {id: 38, floor: '7-15', queue: 1, section: 'D2'},
    {id: 39, floor: '7-15', queue: 1, section: 'D2'},
    {id: 40, floor: '7-15', queue: 1, section: 'D2'},
    {id: 41, floor: '7-15', queue: 1, section: 'D2'},
    {id: 42, floor: '7-15', queue: 1, section: 'D2'},
    {id: 43, floor: '7-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 44, floor: '7-15', queue: 1, section: 'D2'},
    {id: 45, floor: '7-15', queue: 1, section: 'D2'},

    {id: 46, floor: '8-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 47, floor: '8-15', queue: 1, section: 'D2'},
    {id: 48, floor: '8-15', queue: 1, section: 'D2'},
    {id: 49, floor: '8-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 50, floor: '8-15', queue: 1, section: 'D2'},
    {id: 51, floor: '8-15', queue: 1, section: 'D2'},
    {id: 52, floor: '8-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 53, floor: '8-15', queue: 1, section: 'D2'},
    {id: 54, floor: '8-15', queue: 1, section: 'D2'},

    {id: 55, floor: '9-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 56, floor: '9-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 57, floor: '9-15', queue: 1, section: 'D2'},
    {id: 58, floor: '9-15', queue: 1, section: 'D2'},
    {id: 59, floor: '9-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 60, floor: '9-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 61, floor: '9-15', queue: 1, section: 'D2'},
    {id: 62, floor: '9-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 63, floor: '9-15', queue: 1, section: 'D2'},

    {id: 64, floor: '10-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 65, floor: '10-15', queue: 1, section: 'D2'},
    {id: 66, floor: '10-15', queue: 1, section: 'D2'},
    {id: 67, floor: '10-15', queue: 1, section: 'D2'},
    {id: 68, floor: '10-15', queue: 1, section: 'D2'},
    {id: 69, floor: '10-15', queue: 1, section: 'D2'},
    {id: 70, floor: '10-15', queue: 1, section: 'D2'},
    {id: 71, floor: '10-15', queue: 1, section: 'D2'},
    {id: 72, floor: '10-15', queue: 1, section: 'D2', finishing: true, url: ''},

    {id: 73, floor: '11-15', queue: 1, section: 'D2'},
    {id: 74, floor: '11-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 75, floor: '11-15', queue: 1, section: 'D2'},
    {id: 76, floor: '11-15', queue: 1, section: 'D2'},
    {id: 77, floor: '11-15', queue: 1, section: 'D2'},
    {id: 78, floor: '11-15', queue: 1, section: 'D2'},
    {id: 79, floor: '11-15', queue: 1, section: 'D2'},
    {id: 80, floor: '11-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 81, floor: '11-15', queue: 1, section: 'D2', finishing: true, url: ''},

    {id: 82, floor: '12-15', queue: 1, section: 'D2'},
    {id: 83, floor: '12-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 84, floor: '12-15', queue: 1, section: 'D2'},
    {id: 85, floor: '12-15', queue: 1, section: 'D2'},
    {id: 86, floor: '12-15', queue: 1, section: 'D2'},
    {id: 87, floor: '12-15', queue: 1, section: 'D2'},
    {id: 88, floor: '12-15', queue: 1, section: 'D2'},
    {id: 89, floor: '12-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 90, floor: '12-15', queue: 1, section: 'D2'},

    {id: 91, floor: '13-15', queue: 1, section: 'D2'},
    {id: 92, floor: '13-15', queue: 1, section: 'D2'},
    {id: 93, floor: '13-15', queue: 1, section: 'D2'},
    {id: 94, floor: '13-15', queue: 1, section: 'D2'},
    {id: 95, floor: '13-15', queue: 1, section: 'D2'},
    {id: 96, floor: '13-15', queue: 1, section: 'D2'},
    {id: 97, floor: '13-15', queue: 1, section: 'D2'},
    {id: 98, floor: '13-15', queue: 1, section: 'D2'},
    {id: 99, floor: '13-15', queue: 1, section: 'D2', finishing: true, url: ''},

    {id: 100, floor: '14-15', queue: 1, section: 'D2'},
    {id: 101, floor: '14-15', queue: 1, section: 'D2'},
    {id: 102, floor: '14-15', queue: 1, section: 'D2'},
    {id: 103, floor: '14-15', queue: 1, section: 'D2'},
    {id: 104, floor: '14-15', queue: 1, section: 'D2'},
    {id: 105, floor: '14-15', queue: 1, section: 'D2'},

    {id: 100, floor: '15-15', queue: 1, section: 'D2'},
    {id: 106, floor: '15-15', queue: 1, section: 'D2'},
    {id: 107, floor: '15-15', queue: 1, section: 'D2'},
    {id: 108, floor: '15-15', queue: 1, section: 'D2', finishing: true, url: ''},
    {id: 109, floor: '15-15', queue: 1, section: 'D2'},
    {id: 110, floor: '15-15', queue: 1, section: 'D2'},

    // D1

    {id: 111, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 112, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 113, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 114, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: '' },
    {id: 115, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 116, floor: '3-15', queue: 1, section: 'D1'},
    {id: 117, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: '' },
    {id: 118, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 119, floor: '3-15', queue: 1, section: 'D1', finishing: true, url: ''},

    {id: 120, floor: '4-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 121, floor: '4-15', queue: 1, section: 'D1'},
    {id: 122, floor: '4-15', queue: 1, section: 'D1'},
    {id: 123, floor: '4-15', queue: 1, section: 'D1'},
    {id: 124, floor: '4-15', queue: 1, section: 'D1'},
    {id: 125, floor: '4-15', queue: 1, section: 'D1'},
    {id: 126, floor: '4-15', queue: 1, section: 'D1', finishing: true, url: '' },
    {id: 127, floor: '4-15', queue: 1, section: 'D1'},
    {id: 128, floor: '4-15', queue: 1, section: 'D1'},

    {id: 129, floor: '5-15', queue: 1, section: 'D1'},
    {id: 130, floor: '5-15', queue: 1, section: 'D1'},
    {id: 131, floor: '5-15', queue: 1, section: 'D1'},
    {id: 132, floor: '5-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 133, floor: '5-15', queue: 1, section: 'D1'},
    {id: 134, floor: '5-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 135, floor: '5-15', queue: 1, section: 'D1'},
    {id: 136, floor: '5-15', queue: 1, section: 'D1'},
    {id: 137, floor: '5-15', queue: 1, section: 'D1', finishing: true, url: ''},

    {id: 138, floor: '6-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 139, floor: '6-15', queue: 1, section: 'D1'},
    {id: 140, floor: '6-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 141, floor: '6-15', queue: 1, section: 'D1'},
    {id: 142, floor: '6-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 143, floor: '6-15', queue: 1, section: 'D1'},
    {id: 144, floor: '6-15', queue: 1, section: 'D1'},
    {id: 145, floor: '6-15', queue: 1, section: 'D1'},
    {id: 146, floor: '6-15', queue: 1, section: 'D1', finishing: true, url: '' },

    {id: 147, floor: '7-15', queue: 1, section: 'D1'},
    {id: 148, floor: '7-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 149, floor: '7-15', queue: 1, section: 'D1'},
    {id: 150, floor: '7-15', queue: 1, section: 'D1'},
    {id: 151, floor: '7-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 152, floor: '7-15', queue: 1, section: 'D2'},
    {id: 153, floor: '7-15', queue: 1, section: 'D1'},
    {id: 154, floor: '7-15', queue: 1, section: 'D1'},
    {id: 155, floor: '7-15', queue: 1, section: 'D1'},

    {id: 156, floor: '8-15', queue: 1, section: 'D1'},
    {id: 157, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 158, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 159, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 160, floor: '8-15', queue: 1, section: 'D1'},
    {id: 161, floor: '8-15', queue: 1, section: 'D1'},
    {id: 162, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 163, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 164, floor: '8-15', queue: 1, section: 'D1', finishing: true, url: ''},

    {id: 165, floor: '9-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 166, floor: '9-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 167, floor: '9-15', queue: 1, section: 'D1'},
    {id: 168, floor: '9-15', queue: 1, section: 'D1'},
    {id: 169, floor: '9-15', queue: 1, section: 'D1'},
    {id: 170, floor: '9-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 171, floor: '9-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 172, floor: '9-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 173, floor: '9-15', queue: 1, section: 'D1'},

    {id: 174, floor: '10-15', queue: 1, section: 'D1'},
    {id: 175, floor: '10-15', queue: 1, section: 'D1'},
    {id: 176, floor: '10-15', queue: 1, section: 'D1'},
    {id: 177, floor: '10-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 178, floor: '10-15', queue: 1, section: 'D1'},
    {id: 179, floor: '10-15', queue: 1, section: 'D1'},
    {id: 180, floor: '10-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 181, floor: '10-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 182, floor: '10-15', queue: 1, section: 'D1', finishing: true, url: ''},

    {id: 183, floor: '11-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 184, floor: '11-15', queue: 1, section: 'D1'},
    {id: 185, floor: '11-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 186, floor: '11-15', queue: 1, section: 'D1'},
    {id: 187, floor: '11-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 188, floor: '11-15', queue: 1, section: 'D1'},
    {id: 189, floor: '11-15', queue: 1, section: 'D1'},
    {id: 190, floor: '11-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 191, floor: '11-15', queue: 1, section: 'D1'},

    {id: 192, floor: '12-15', queue: 1, section: 'D1'},
    {id: 193, floor: '12-15', queue: 1, section: 'D1'},
    {id: 194, floor: '12-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 195, floor: '12-15', queue: 1, section: 'D1'},
    {id: 196, floor: '12-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 197, floor: '12-15', queue: 1, section: 'D1', finishing: true, url: '' },
    {id: 198, floor: '12-15', queue: 1, section: 'D1'},
    {id: 199, floor: '12-15', queue: 1, section: 'D1'},
    {id: 200, floor: '12-15', queue: 1, section: 'D1', finishing: true, url: ''},

    {id: 201, floor: '13-15', queue: 1, section: 'D1'},
    {id: 202, floor: '13-15', queue: 1, section: 'D1'},
    {id: 203, floor: '13-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 204, floor: '13-15', queue: 1, section: 'D1'},
    {id: 205, floor: '13-15', queue: 1, section: 'D1'},
    {id: 206, floor: '13-15', queue: 1, section: 'D1'},
    {id: 207, floor: '13-15', queue: 1, section: 'D1'},
    {id: 208, floor: '13-15', queue: 1, section: 'D1'},
    {id: 209, floor: '13-15', queue: 1, section: 'D1'},

    {id: 210, floor: '14-15', queue: 1, section: 'D1'},
    {id: 211, floor: '14-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 212, floor: '14-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 213, floor: '14-15', queue: 1, section: 'D1'},
    {id: 214, floor: '14-15', queue: 1, section: 'D1'},
    {id: 215, floor: '14-15', queue: 1, section: 'D1'},

    {id: 210, floor: '15-15', queue: 1, section: 'D1'},
    {id: 216, floor: '15-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 217, floor: '15-15', queue: 1, section: 'D1', finishing: true, url: ''},
    {id: 218, floor: '15-15', queue: 1, section: 'D1'},
    {id: 219, floor: '15-15', queue: 1, section: 'D1'},
    {id: 220, floor: '15-15', queue: 1, section: 'D1', finishing: true, url: ''},

    // A1

    {id: 211, floor: '3-15', queue: 1, section: 'A1'},
    {id: 222, floor: '3-15', queue: 1, section: 'A1', finishing: true, url: '' },
    {id: 223, floor: '3-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 224, floor: '3-15', queue: 1, section: 'A1'},
    {id: 225, floor: '3-15', queue: 1, section: 'A1'},
    {id: 226, floor: '3-15', queue: 1, section: 'A1'},
    {id: 227, floor: '3-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 228, floor: '3-15', queue: 1, section: 'A1'},
    {id: 229, floor: '3-15', queue: 1, section: 'A1'},
    {id: 230, floor: '3-15', queue: 1, section: 'A1'},
    {id: 231, floor: '3-15', queue: 1, section: 'A1'},
    {id: 232, floor: '3-15', queue: 1, section: 'A1'},

    {id: 233, floor: '4-15', queue: 1, section: 'A1'},
    {id: 234, floor: '4-15', queue: 1, section: 'A1'},
    {id: 235, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 236, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 237, floor: '4-15', queue: 1, section: 'A1'},
    {id: 238, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 239, floor: '4-15', queue: 1, section: 'A1'},
    {id: 240, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 241, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 242, floor: '4-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 243, floor: '4-15', queue: 1, section: 'A1'},
    {id: 244, floor: '4-15', queue: 1, section: 'A1'},

    {id: 245, floor: '5-15', queue: 1, section: 'A1'},
    {id: 246, floor: '5-15', queue: 1, section: 'A1'},
    {id: 247, floor: '5-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 248, floor: '5-15', queue: 1, section: 'A1'},
    {id: 249, floor: '5-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 250, floor: '5-15', queue: 1, section: 'A1'},
    {id: 251, floor: '5-15', queue: 1, section: 'A1'},
    {id: 252, floor: '5-15', queue: 1, section: 'A1'},
    {id: 253, floor: '5-15', queue: 1, section: 'A1'},
    {id: 254, floor: '5-15', queue: 1, section: 'A1'},
    {id: 255, floor: '5-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 256, floor: '5-15', queue: 1, section: 'A1'},

    {id: 257, floor: '6-15', queue: 1, section: 'A1'},
    {id: 258, floor: '6-15', queue: 1, section: 'A1'},
    {id: 259, floor: '6-15', queue: 1, section: 'A1'},
    {id: 260, floor: '6-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 261, floor: '6-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 262, floor: '6-15', queue: 1, section: 'A1'},
    {id: 263, floor: '6-15', queue: 1, section: 'A1'},
    {id: 264, floor: '6-15', queue: 1, section: 'A1'},
    {id: 265, floor: '6-15', queue: 1, section: 'A1'},
    {id: 266, floor: '6-15', queue: 1, section: 'A1'},
    {id: 267, floor: '6-15', queue: 1, section: 'A1'},
    {id: 268, floor: '6-15', queue: 1, section: 'A1', finishing: true, url: ''},

    {id: 269, floor: '7-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 270, floor: '7-15', queue: 1, section: 'A1'},
    {id: 271, floor: '7-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 272, floor: '7-15', queue: 1, section: 'A1'},
    {id: 273, floor: '7-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 274, floor: '7-15', queue: 1, section: 'A2'},
    {id: 275, floor: '7-15', queue: 1, section: 'A1'},
    {id: 276, floor: '7-15', queue: 1, section: 'A1'},
    {id: 277, floor: '7-15', queue: 1, section: 'A1'},
    {id: 278, floor: '7-15', queue: 1, section: 'A1'},
    {id: 279, floor: '7-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 280, floor: '7-15', queue: 1, section: 'A1', finishing: true, url: ''},

    {id: 281, floor: '8-15', queue: 1, section: 'A1'},
    {id: 282, floor: '8-15', queue: 1, section: 'A1'},
    {id: 283, floor: '8-15', queue: 1, section: 'A1'},
    {id: 284, floor: '8-15', queue: 1, section: 'A1'},
    {id: 285, floor: '8-15', queue: 1, section: 'A1'},
    {id: 286, floor: '8-15', queue: 1, section: 'A1'},
    {id: 287, floor: '8-15', queue: 1, section: 'A1'},
    {id: 288, floor: '8-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 289, floor: '8-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 290, floor: '8-15', queue: 1, section: 'A1'},
    {id: 291, floor: '8-15', queue: 1, section: 'A1'},
    {id: 292, floor: '8-15', queue: 1, section: 'A1'},

    {id: 293, floor: '9-15', queue: 1, section: 'A1'},
    {id: 294, floor: '9-15', queue: 1, section: 'A1'},
    {id: 295, floor: '9-15', queue: 1, section: 'A1'},
    {id: 296, floor: '9-15', queue: 1, section: 'A1'},
    {id: 297, floor: '9-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 298, floor: '9-15', queue: 1, section: 'A1'},
    {id: 299, floor: '9-15', queue: 1, section: 'A1'},
    {id: 300, floor: '9-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 301, floor: '9-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 302, floor: '9-15', queue: 1, section: 'A1'},
    {id: 303, floor: '9-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 304, floor: '9-15', queue: 1, section: 'A1', finishing: true, url: ''},

    {id: 305, floor: '10-15', queue: 1, section: 'A1'},
    {id: 306, floor: '10-15', queue: 1, section: 'A1'},
    {id: 307, floor: '10-15', queue: 1, section: 'A1'},
    {id: 308, floor: '10-15', queue: 1, section: 'A1'},
    {id: 309, floor: '10-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 310, floor: '10-15', queue: 1, section: 'A1'},
    {id: 311, floor: '10-15', queue: 1, section: 'A1'},
    {id: 312, floor: '10-15', queue: 1, section: 'A1'},
    {id: 313, floor: '10-15', queue: 1, section: 'A1'},
    {id: 314, floor: '10-15', queue: 1, section: 'A1'},
    {id: 315, floor: '10-15', queue: 1, section: 'A1'},
    {id: 316, floor: '10-15', queue: 1, section: 'A1', finishing: true, url: ''},

    {id: 317, floor: '11-15', queue: 1, section: 'A1'},
    {id: 318, floor: '11-15', queue: 1, section: 'A1'},
    {id: 319, floor: '11-15', queue: 1, section: 'A1'},
    {id: 320, floor: '11-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 321, floor: '11-15', queue: 1, section: 'A1'},
    {id: 322, floor: '11-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 323, floor: '11-15', queue: 1, section: 'A1'},
    {id: 324, floor: '11-15', queue: 1, section: 'A1'},
    {id: 325, floor: '11-15', queue: 1, section: 'A1'},
    {id: 326, floor: '11-15', queue: 1, section: 'A1'},
    {id: 327, floor: '11-15', queue: 1, section: 'A1'},
    {id: 328, floor: '11-15', queue: 1, section: 'A1'},

    {id: 329, floor: '12-15', queue: 1, section: 'A1'},
    {id: 330, floor: '12-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 331, floor: '12-15', queue: 1, section: 'A1'},
    {id: 332, floor: '12-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 333, floor: '12-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 334, floor: '12-15', queue: 1, section: 'A1'},
    {id: 335, floor: '12-15', queue: 1, section: 'A1'},
    {id: 336, floor: '12-15', queue: 1, section: 'A1'},
    {id: 337, floor: '12-15', queue: 1, section: 'A1'},
    {id: 338, floor: '12-15', queue: 1, section: 'A1'},
    {id: 339, floor: '12-15', queue: 1, section: 'A1'},
    {id: 340, floor: '12-15', queue: 1, section: 'A1'},

    {id: 341, floor: '13-15', queue: 1, section: 'A1'},
    {id: 342, floor: '13-15', queue: 1, section: 'A1'},
    {id: 343, floor: '13-15', queue: 1, section: 'A1'},
    {id: 344, floor: '13-15', queue: 1, section: 'A1'},
    {id: 345, floor: '13-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 346, floor: '13-15', queue: 1, section: 'A1'},
    {id: 347, floor: '13-15', queue: 1, section: 'A1'},
    {id: 348, floor: '13-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 349, floor: '13-15', queue: 1, section: 'A1'},
    {id: 350, floor: '13-15', queue: 1, section: 'A1'},
    {id: 351, floor: '13-15', queue: 1, section: 'A1'},
    {id: 352, floor: '13-15', queue: 1, section: 'A1'},

    {id: 353, floor: '14-15', queue: 1, section: 'A1'},
    {id: 354, floor: '14-15', queue: 1, section: 'A1'},
    {id: 355, floor: '14-15', queue: 1, section: 'A1'},
    {id: 356, floor: '14-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 357, floor: '14-15', queue: 1, section: 'A1'},
    {id: 358, floor: '14-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 359, floor: '14-15', queue: 1, section: 'A1'},
    {id: 360, floor: '14-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 361, floor: '14-15', queue: 1, section: 'A1'},
    {id: 362, floor: '14-15', queue: 1, section: 'A1'},
    {id: 363, floor: '14-15', queue: 1, section: 'A1'},
    {id: 364, floor: '14-15', queue: 1, section: 'A1'},

    {id: 365, floor: '15-15', queue: 1, section: 'A1'},
    {id: 366, floor: '15-15', queue: 1, section: 'A1'},
    {id: 367, floor: '15-15', queue: 1, section: 'A1'},
    {id: 368, floor: '15-15', queue: 1, section: 'A1'},
    {id: 369, floor: '15-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 370, floor: '15-15', queue: 1, section: 'A1'},
    {id: 371, floor: '15-15', queue: 1, section: 'A1'},
    {id: 372, floor: '15-15', queue: 1, section: 'A1', finishing: true, url: ''},
    {id: 373, floor: '15-15', queue: 1, section: 'A1'},
    {id: 374, floor: '15-15', queue: 1, section: 'A1'},
    {id: 375, floor: '15-15', queue: 1, section: 'A1'},
    {id: 376, floor: '15-15', queue: 1, section: 'A1'},

    //G1(2)

    {id: 377, floor: '1-14', queue: 2, section: 'G1'},
    {id: 378, floor: '1-14', queue: 2, section: 'G1'},
    {id: 379, floor: '1-14', queue: 2, section: 'G1'},
    {id: 380, floor: '1-14', queue: 2, section: 'G1'},

    {id: 381, floor: '2-14', queue: 2, section: 'G1'},
    {id: 382, floor: '2-14', queue: 2, section: 'G1'},
    {id: 383, floor: '2-14', queue: 2, section: 'G1'},
    {id: 384, floor: '2-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 385, floor: '2-14', queue: 2, section: 'G1'},

    {id: 386, floor: '3-14', queue: 2, section: 'G1'},
    {id: 387, floor: '3-14', queue: 2, section: 'G1'},
    {id: 388, floor: '3-14', queue: 2, section: 'G1'},
    {id: 389, floor: '3-14', queue: 2, section: 'G1'},
    {id: 390, floor: '3-14', queue: 2, section: 'G1'},

    {id: 391, floor: '4-14', queue: 2, section: 'G1'},
    {id: 392, floor: '4-14', queue: 2, section: 'G1'},
    {id: 393, floor: '4-14', queue: 2, section: 'G1'},
    {id: 394, floor: '4-14', queue: 2, section: 'G1', finishing: true, url: '' },
    {id: 395, floor: '4-14', queue: 2, section: 'G1'},

    {id: 396, floor: '5-15', queue: 2, section: 'G1'},
    {id: 397, floor: '5-15', queue: 2, section: 'G1'},
    {id: 398, floor: '5-15', queue: 2, section: 'G1'},
    {id: 399, floor: '5-15', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 400, floor: '5-15', queue: 2, section: 'G1'},

    {id: 401, floor: '6-14', queue: 2, section: 'G1'},
    {id: 402, floor: '6-14', queue: 2, section: 'G1'},
    {id: 403, floor: '6-14', queue: 2, section: 'G1'},
    {id: 404, floor: '6-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 405, floor: '6-14', queue: 2, section: 'G1', finishing: true, url: ''},

    {id: 406, floor: '7-14', queue: 2, section: 'G1'},
    {id: 407, floor: '7-14', queue: 2, section: 'G1'},
    {id: 408, floor: '7-14', queue: 2, section: 'G1'},
    {id: 409, floor: '7-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 410, floor: '7-14', queue: 2, section: 'G1'},

    {id: 411, floor: '8-14', queue: 2, section: 'G1'},
    {id: 412, floor: '8-14', queue: 2, section: 'G1'},
    {id: 413, floor: '8-14', queue: 2, section: 'G1'},
    {id: 414, floor: '8-14', queue: 2, section: 'G1'},
    {id: 415, floor: '8-14', queue: 2, section: 'G1', finishing: true, url: '' },

    {id: 416, floor: '9-14', queue: 2, section: 'G1'},
    {id: 417, floor: '9-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 418, floor: '9-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 419, floor: '9-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 420, floor: '9-14', queue: 2, section: 'G1'},

    {id: 421, floor: '10-14', queue: 2, section: 'G1'},
    {id: 422, floor: '10-14', queue: 2, section: 'G1'},
    {id: 423, floor: '10-14', queue: 2, section: 'G1'},
    {id: 424, floor: '10-14', queue: 2, section: 'G1'},
    {id: 425, floor: '10-14', queue: 2, section: 'G1'},

    {id: 426, floor: '11-14', queue: 2, section: 'G1'},
    {id: 427, floor: '11-14', queue: 2, section: 'G1'},
    {id: 428, floor: '11-14', queue: 2, section: 'G1'},
    {id: 429, floor: '11-14', queue: 2, section: 'G1'},
    {id: 430, floor: '11-14', queue: 2, section: 'G1'},

    {id: 431, floor: '12-14', queue: 2, section: 'G1'},
    {id: 432, floor: '12-14', queue: 2, section: 'G1'},
    {id: 433, floor: '12-14', queue: 2, section: 'G1'},
    {id: 434, floor: '12-14', queue: 2, section: 'G1'},
    {id: 435, floor: '12-14', queue: 2, section: 'G1'},

    {id: 436, floor: '13-14', queue: 2, section: 'G1'},
    {id: 437, floor: '13-14', queue: 2, section: 'G1'},
    {id: 438, floor: '13-14', queue: 2, section: 'G1'},
    {id: 439, floor: '13-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 440, floor: '13-14', queue: 2, section: 'G1'},

    {id: 441, floor: '14-14', queue: 2, section: 'G1'},
    {id: 442, floor: '14-14', queue: 2, section: 'G1', finishing: true, url: ''},
    {id: 443, floor: '14-14', queue: 2, section: 'G1'},
    {id: 444, floor: '14-14', queue: 2, section: 'G1', finishing: true, url: ''},

    //H2

    {id: 445, floor: '1-12', queue: 2, section: 'H1'},
    {id: 446, floor: '1-12', queue: 2, section: 'H1'},
    {id: 447, floor: '1-12', queue: 2, section: 'H1'},
    {id: 448, floor: '1-12', queue: 2, section: 'H1'},
    {id: 449, floor: '1-12', queue: 2, section: 'H1'},
    {id: 450, floor: '1-12', queue: 2, section: 'H1'},

    {id: 451, floor: '2-12', queue: 2, section: 'H1'},
    {id: 452, floor: '2-12', queue: 2, section: 'H1'},
    {id: 453, floor: '2-12', queue: 2, section: 'H1'},
    {id: 454, floor: '2-12', queue: 2, section: 'H1', finishing: true, url: '' },
    {id: 455, floor: '2-12', queue: 2, section: 'H1'},
    {id: 456, floor: '2-12', queue: 2, section: 'H1'},

    {id: 457, floor: '3-12', queue: 2, section: 'H1'},
    {id: 458, floor: '3-12', queue: 2, section: 'H1'},
    {id: 459, floor: '3-12', queue: 2, section: 'H1'},
    {id: 460, floor: '3-12', queue: 2, section: 'H1'},
    {id: 461, floor: '3-12', queue: 2, section: 'H1'},
    {id: 462, floor: '3-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 463, floor: '3-12', queue: 2, section: 'H1'},
    {id: 464, floor: '3-12', queue: 2, section: 'H1'},

    {id: 465, floor: '4-12', queue: 2, section: 'H1'},
    {id: 466, floor: '4-12', queue: 2, section: 'H1'},
    {id: 467, floor: '4-12', queue: 2, section: 'H1'},
    {id: 468, floor: '4-12', queue: 2, section: 'H1'},
    {id: 469, floor: '4-12', queue: 2, section: 'H1'},
    {id: 470, floor: '4-12', queue: 2, section: 'H1'},
    {id: 471, floor: '4-12', queue: 2, section: 'H1', finishing: true, url: ''},

    {id: 472, floor: '5-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 473, floor: '5-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 474, floor: '5-12', queue: 2, section: 'H1'},
    {id: 475, floor: '5-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 476, floor: '5-12', queue: 2, section: 'H1'},
    {id: 477, floor: '5-12', queue: 2, section: 'H1'},
    {id: 478, floor: '5-12', queue: 2, section: 'H1', finishing: true, url: ''},

    {id: 479, floor: '6-12', queue: 2, section: 'H1'},
    {id: 480, floor: '6-12', queue: 2, section: 'H1'},
    {id: 481, floor: '6-12', queue: 2, section: 'H1'},
    {id: 482, floor: '6-12', queue: 2, section: 'H1'},
    {id: 483, floor: '6-12', queue: 2, section: 'H1'},
    {id: 484, floor: '6-12', queue: 2, section: 'H1'},
    {id: 485, floor: '6-12', queue: 2, section: 'H1'},

    {id: 486, floor: '7-12', queue: 2, section: 'H1'},
    {id: 487, floor: '7-12', queue: 2, section: 'H1'},
    {id: 488, floor: '7-12', queue: 2, section: 'H1'},
    {id: 489, floor: '7-12', queue: 2, section: 'H1'},
    {id: 490, floor: '7-12', queue: 2, section: 'H1'},
    {id: 491, floor: '7-12', queue: 2, section: 'H1'},
    {id: 492, floor: '7-12', queue: 2, section: 'H1'},

    {id: 493, floor: '8-12', queue: 2, section: 'H1'},
    {id: 494, floor: '8-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 495, floor: '8-12', queue: 2, section: 'H1'},
    {id: 496, floor: '8-12', queue: 2, section: 'H1'},
    {id: 497, floor: '8-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 498, floor: '8-12', queue: 2, section: 'H1'},
    {id: 499, floor: '8-12', queue: 2, section: 'H1'},

    {id: 500, floor: '9-12', queue: 2, section: 'H1'},
    {id: 501, floor: '9-12', queue: 2, section: 'H1', finishing: true, url: '' },
    {id: 502, floor: '9-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 503, floor: '9-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 504, floor: '9-12', queue: 2, section: 'H1'},
    {id: 505, floor: '9-12', queue: 2, section: 'H1'},
    {id: 506, floor: '9-12', queue: 2, section: 'H1', finishing: true, url: ''},

    {id: 507, floor: '10-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 508, floor: '10-12', queue: 2, section: 'H1'},
    {id: 509, floor: '10-12', queue: 2, section: 'H1'},
    {id: 510, floor: '10-12', queue: 2, section: 'H1'},
    {id: 511, floor: '10-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 512, floor: '10-12', queue: 2, section: 'H1'},
    {id: 513, floor: '10-12', queue: 2, section: 'H1', finishing: true, url: ''},

    {id: 514, floor: '11-12', queue: 2, section: 'H1'},
    {id: 515, floor: '11-12', queue: 2, section: 'H1'},
    {id: 516, floor: '11-12', queue: 2, section: 'H1'},
    {id: 517, floor: '11-12', queue: 2, section: 'H1'},
    {id: 518, floor: '11-12', queue: 2, section: 'H1'},
    {id: 519, floor: '11-12', queue: 2, section: 'H1'},
    {id: 520, floor: '11-12', queue: 2, section: 'H1'},

    {id: 521, floor: '12-12', queue: 2, section: 'H1'},
    {id: 522, floor: '12-12', queue: 2, section: 'H1'},
    {id: 523, floor: '12-12', queue: 2, section: 'H1'},
    {id: 524, floor: '12-12', queue: 2, section: 'H1', finishing: true, url: ''},
    {id: 525, floor: '12-12', queue: 2, section: 'H1'},
    {id: 526, floor: '12-12', queue: 2, section: 'H1'},

    // K1

    {id: 527, floor: '1-10', queue: 2, section: 'K1'},
    {id: 528, floor: '1-10', queue: 2, section: 'K1'},
    {id: 529, floor: '1-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 530, floor: '1-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 531, floor: '1-10', queue: 2, section: 'K1'},

    {id: 532, floor: '2-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 533, floor: '2-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 534, floor: '2-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 535, floor: '2-10', queue: 2, section: 'K1'},
    {id: 536, floor: '2-10', queue: 2, section: 'K1'},

    {id: 537, floor: '3-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 538, floor: '3-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 539, floor: '3-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 540, floor: '3-10', queue: 2, section: 'K1'},
    {id: 541, floor: '3-10', queue: 2, section: 'K1', finishing: true, url: ''},

    {id: 542, floor: '4-10', queue: 2, section: 'K1'},
    {id: 543, floor: '4-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 544, floor: '4-10', queue: 2, section: 'K1'},
    {id: 545, floor: '4-10', queue: 2, section: 'K1'},
    {id: 546, floor: '4-10', queue: 2, section: 'K1'},

    {id: 547, floor: '5-10', queue: 2, section: 'K1'},
    {id: 548, floor: '5-10', queue: 2, section: 'K1'},
    {id: 549, floor: '5-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 550, floor: '5-10', queue: 2, section: 'K1'},
    {id: 551, floor: '5-10', queue: 2, section: 'K1'},

    {id: 552, floor: '6-10', queue: 2, section: 'K1'},
    {id: 553, floor: '6-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 554, floor: '6-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 555, floor: '6-10', queue: 2, section: 'K1'},
    {id: 556, floor: '6-10', queue: 2, section: 'K1'},

    {id: 557, floor: '7-10', queue: 2, section: 'K1'},
    {id: 558, floor: '7-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 559, floor: '7-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 560, floor: '7-10', queue: 2, section: 'K1'},
    {id: 561, floor: '7-10', queue: 2, section: 'K1'},

    {id: 562, floor: '8-10', queue: 2, section: 'K1'},
    {id: 563, floor: '8-10', queue: 2, section: 'K1'},
    {id: 564, floor: '8-10', queue: 2, section: 'K1'},
    {id: 565, floor: '8-10', queue: 2, section: 'K1'},
    {id: 566, floor: '8-10', queue: 2, section: 'K1'},

    {id: 567, floor: '9-10', queue: 2, section: 'K1'},
    {id: 568, floor: '9-10', queue: 2, section: 'K1', finishing: true, url: '' },
    {id: 569, floor: '9-10', queue: 2, section: 'K1'},
    {id: 570, floor: '9-10', queue: 2, section: 'K1'},
    {id: 571, floor: '9-10', queue: 2, section: 'K1'},

    {id: 572, floor: '10-10', queue: 2, section: 'K1'},
    {id: 573, floor: '10-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 574, floor: '10-10', queue: 2, section: 'K1', finishing: true, url: ''},
    {id: 575, floor: '10-10', queue: 2, section: 'K1'},

    //N4(4)

    {id: 576, floor: '1-15', queue: 4, section: 'N4'},
    {id: 577, floor: '1-15', queue: 4, section: 'N4'},
    {id: 578, floor: '1-15', queue: 4, section: 'N4'},
    {id: 579, floor: '1-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 580, floor: '1-15', queue: 4, section: 'N4'},
    {id: 581, floor: '1-15', queue: 4, section: 'N4'},

    {id: 582, floor: '2-15', queue: 4, section: 'N4'},
    {id: 583, floor: '2-15', queue: 4, section: 'N4'},
    {id: 584, floor: '2-15', queue: 4, section: 'N4'},
    {id: 585, floor: '2-15', queue: 4, section: 'N4'},
    {id: 586, floor: '2-15', queue: 4, section: 'N4'},
    {id: 587, floor: '2-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 588, floor: '2-15', queue: 4, section: 'N4'},

    {id: 589, floor: '3-15', queue: 4, section: 'N4'},
    {id: 590, floor: '3-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 591, floor: '3-15', queue: 4, section: 'N4'},
    {id: 592, floor: '3-15', queue: 4, section: 'N4'},
    {id: 593, floor: '3-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 594, floor: '3-15', queue: 4, section: 'N4'},
    {id: 595, floor: '3-15', queue: 4, section: 'N4', finishing: true, url: ''},

    {id: 596, floor: '4-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 597, floor: '4-15', queue: 4, section: 'N4'},
    {id: 598, floor: '4-15', queue: 4, section: 'N4'},
    {id: 599, floor: '4-15', queue: 4, section: 'N4'},
    {id: 600, floor: '4-15', queue: 4, section: 'N4'},
    {id: 601, floor: '4-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 602, floor: '4-15', queue: 4, section: 'N4'},

    {id: 603, floor: '5-15', queue: 4, section: 'N4', finishing: true, url: '' },
    {id: 604, floor: '5-15', queue: 4, section: 'N4'},
    {id: 605, floor: '5-15', queue: 4, section: 'N4'},
    {id: 606, floor: '5-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 607, floor: '5-15', queue: 4, section: 'N4'},
    {id: 608, floor: '5-15', queue: 4, section: 'N4'},
    {id: 609, floor: '5-15', queue: 4, section: 'N4'},

    {id: 610, floor: '6-15', queue: 4, section: 'N4', finishing: true, url: '' },
    {id: 611, floor: '6-15', queue: 4, section: 'N4'},
    {id: 612, floor: '6-15', queue: 4, section: 'N4'},
    {id: 613, floor: '6-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 614, floor: '6-15', queue: 4, section: 'N4'},
    {id: 615, floor: '6-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 616, floor: '6-15', queue: 4, section: 'N4'},

    {id: 617, floor: '7-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 618, floor: '7-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 619, floor: '7-15', queue: 4, section: 'N4'},
    {id: 620, floor: '7-15', queue: 4, section: 'N4'},
    {id: 621, floor: '7-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 622, floor: '7-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 623, floor: '7-15', queue: 4, section: 'N4', finishing: true, url: ''},

    {id: 624, floor: '8-15', queue: 4, section: 'N4'},
    {id: 625, floor: '8-15', queue: 4, section: 'N4'},
    {id: 626, floor: '8-15', queue: 4, section: 'N4'},
    {id: 627, floor: '8-15', queue: 4, section: 'N4'},
    {id: 628, floor: '8-15', queue: 4, section: 'N4'},
    {id: 629, floor: '8-15', queue: 4, section: 'N4'},
    {id: 630, floor: '8-15', queue: 4, section: 'N4'},

    {id: 631, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 632, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 633, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 634, floor: '9-15', queue: 4, section: 'N4'},
    {id: 635, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 636, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 637, floor: '9-15', queue: 4, section: 'N4', finishing: true, url: ''},

    {id: 638, floor: '10-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 639, floor: '10-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 640, floor: '10-15', queue: 4, section: 'N4'},
    {id: 641, floor: '10-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 642, floor: '10-15', queue: 4, section: 'N4'},
    {id: 643, floor: '10-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 644, floor: '10-15', queue: 4, section: 'N4'},

    {id: 645, floor: '11-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 646, floor: '11-15', queue: 4, section: 'N4',finishing: true, url: ''},
    {id: 647, floor: '11-15', queue: 4, section: 'N4'},
    {id: 648, floor: '11-15', queue: 4, section: 'N4'},
    {id: 649, floor: '11-15', queue: 4, section: 'N4'},
    {id: 650, floor: '11-15', queue: 4, section: 'N4'},
    {id: 651, floor: '11-15', queue: 4, section: 'N4'},

    {id: 652, floor: '12-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 653, floor: '12-15', queue: 4, section: 'N4'},
    {id: 654, floor: '12-15', queue: 4, section: 'N4'},
    {id: 655, floor: '12-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 656, floor: '12-15', queue: 4, section: 'N4'},
    {id: 657, floor: '12-15', queue: 4, section: 'N4'},
    {id: 658, floor: '12-15', queue: 4, section: 'N4'},

    {id: 659, floor: '13-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 660, floor: '13-15', queue: 4, section: 'N4'},
    {id: 661, floor: '13-15', queue: 4, section: 'N4'},
    {id: 662, floor: '13-15', queue: 4, section: 'N4'},
    {id: 663, floor: '13-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 664, floor: '13-15', queue: 4, section: 'N4'},
    {id: 665, floor: '13-15', queue: 4, section: 'N4'},

    {id: 666, floor: '14-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 667, floor: '14-15', queue: 4, section: 'N4'},
    {id: 668, floor: '14-15', queue: 4, section: 'N4'},
    {id: 669, floor: '14-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 670, floor: '14-15', queue: 4, section: 'N4'},
    {id: 671, floor: '14-15', queue: 4, section: 'N4'},
    {id: 672, floor: '14-15', queue: 4, section: 'N4'},

    {id: 673, floor: '15-15', queue: 4, section: 'N4', finishing: true, url: ''},
    {id: 674, floor: '15-15', queue: 4, section: 'N4'},
    {id: 675, floor: '15-15', queue: 4, section: 'N4', finishing: true, url: '' },
    {id: 676, floor: '15-15', queue: 4, section: 'N4'},
    {id: 677, floor: '15-15', queue: 4, section: 'N4'},
    {id: 678, floor: '15-15', queue: 4, section: 'N4'},
    {id: 679, floor: '15-15', queue: 4, section: 'N4'},

    //N1(3)

    {id: 680, floor: '1-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 681, floor: '1-15', queue: 3, section: 'N1'},
    {id: 682, floor: '1-15', queue: 3, section: 'N1'},
    {id: 683, floor: '1-15', queue: 3, section: 'N1'},
    {id: 684, floor: '1-15', queue: 3, section: 'N1'},

    {id: 685, floor: '2-15', queue: 3,section: 'N1', finishing: true, url: ''},
    {id: 686, floor: '2-15', queue: 3, section: 'N1'},
    {id: 687, floor: '2-15', queue: 3, section: 'N1'},
    {id: 688, floor: '2-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 689, floor: '2-15', queue: 3, section: 'N1'},
    {id: 690, floor: '2-15', queue: 3, section: 'N1'},

    {id: 691, floor: '3-15', queue: 3, section: 'N1'},
    {id: 692, floor: '3-15', queue: 3, section: 'N1'},
    {id: 693, floor: '3-15', queue: 3, section: 'N1'},
    {id: 694, floor: '3-15', queue: 3, section: 'N1'},
    {id: 695, floor: '3-15', queue: 3, section: 'N1'},
    {id: 696, floor: '3-15', queue: 3, section: 'N1'},

    {id: 697, floor: '4-15', queue: 3, section: 'N1'},
    {id: 698, floor: '4-15', queue: 3, section: 'N1'},
    {id: 699, floor: '4-15', queue: 3, section: 'N1'},
    {id: 700, floor: '4-15', queue: 3, section: 'N1'},
    {id: 701, floor: '4-15', queue: 3, section: 'N1'},
    {id: 702, floor: '4-15', queue: 3, section: 'N1'},

    {id: 703, floor: '5-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 704, floor: '5-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 705, floor: '5-15', queue: 3, section: 'N1'},
    {id: 706, floor: '5-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 707, floor: '5-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 708, floor: '5-15', queue: 3, section: 'N1'},

    {id: 709, floor: '6-15', queue: 3, section: 'N1'},
    {id: 710, floor: '6-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 711, floor: '6-15', queue: 3, section: 'N1'},
    {id: 712, floor: '6-15', queue: 3, section: 'N1'},
    {id: 713, floor: '6-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 714, floor: '6-15', queue: 3, section: 'N1'},

    {id: 715, floor: '7-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 716, floor: '7-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 717, floor: '7-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 718, floor: '7-15', queue: 3, section: 'N1'},
    {id: 719, floor: '7-15', queue: 3, section: 'N1'},
    {id: 720, floor: '7-15', queue: 3, section: 'N1'},

    {id: 721, floor: '8-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 722, floor: '8-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 723, floor: '8-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 724, floor: '8-15', queue: 3, section: 'N1'},
    {id: 725, floor: '8-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 726, floor: '8-15', queue: 3, section: 'N1'},

    {id: 727, floor: '9-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 728, floor: '9-15', queue: 3, section: 'N1'},
    {id: 729, floor: '9-15', queue: 3, section: 'N1'},
    {id: 730, floor: '9-15', queue: 3, section: 'N1'},
    {id: 731, floor: '9-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 732, floor: '9-15', queue: 3, section: 'N1'},

    {id: 733, floor: '10-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 734, floor: '10-15', queue: 3, section: 'N1'},
    {id: 735, floor: '10-15', queue: 3, section: 'N1'},
    {id: 736, floor: '10-15', queue: 3, section: 'N1'},
    {id: 737, floor: '10-15', queue: 3, section: 'N1'},
    {id: 738, floor: '10-15', queue: 3, section: 'N1'},

    {id: 739, floor: '11-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 740, floor: '11-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 741, floor: '11-15', queue: 3, section: 'N1'},
    {id: 742, floor: '11-15', queue: 3, section: 'N1'},
    {id: 743, floor: '11-15', queue: 3, section: 'N1'},
    {id: 744, floor: '11-15', queue: 3, section: 'N1', finishing: true, url: ''},

    {id: 745, floor: '12-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 746, floor: '12-15', queue: 3, section: 'N1'},
    {id: 747, floor: '12-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 748, floor: '12-15', queue: 3, section: 'N1'},
    {id: 749, floor: '12-15', queue: 3, section: 'N1'},
    {id: 750, floor: '12-15', queue: 3, section: 'N1', finishing: true, url: ''},

    {id: 751, floor: '13-15', queue: 3, section: 'N1'},
    {id: 752, floor: '13-15', queue: 3, section: 'N1'},
    {id: 753, floor: '13-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 754, floor: '13-15', queue: 3, section: 'N1'},
    {id: 755, floor: '13-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 756, floor: '13-15', queue: 3, section: 'N1', finishing: true, url: ''},

    {id: 757, floor: '14-15', queue: 3, section: 'N1'},
    {id: 758, floor: '14-15', queue: 3, section: 'N1'},
    {id: 759, floor: '14-15', queue: 3, section: 'N1'},
    {id: 760, floor: '14-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 761, floor: '14-15', queue: 3, section: 'N1', finishing: true, url: ''},
    {id: 762, floor: '14-15', queue: 3, section: 'N1', finishing: true, url: ''},

    {id: 763, floor: '15-15', queue: 3, section: 'N1'},
    {id: 764, floor: '15-15', queue: 3, section: 'N1'},
    {id: 765, floor: '15-15', queue: 3, section: 'N1'},


//N2

    {id: 766, floor: '1-14', queue: 3, section: 'N2'},
    {id: 767, floor: '1-14', queue: 3, section: 'N2'},
    {id: 768, floor: '1-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 769, floor: '1-14', queue: 3, section: 'N2'},

    {id: 770, floor: '2-14', queue: 3, section: 'N2'},
    {id: 771, floor: '2-14', queue: 3, section: 'N2'},
    {id: 772, floor: '2-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 773, floor: '2-14', queue: 3, section: 'N2'},
    {id: 774, floor: '2-14', queue: 3, section: 'N2'},

    {id: 775, floor: '3-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 776, floor: '3-14', queue: 3, section: 'N2'},
    {id: 777, floor: '3-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 778, floor: '3-14', queue: 3, section: 'N2'},
    {id: 779, floor: '3-14', queue: 3, section: 'N2', finishing: true, url: ''},

    {id: 780, floor: '4-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 781, floor: '4-14', queue: 3, section: 'N2'},
    {id: 782, floor: '4-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 783, floor: '4-14', queue: 3, section: 'N2'},
    {id: 784, floor: '4-14', queue: 3, section: 'N2'},

    {id: 785, floor: '5-14', queue: 3, section: 'N2'},
    {id: 786, floor: '5-14', queue: 3, section: 'N2'},
    {id: 787, floor: '5-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 788, floor: '5-14', queue: 3, section: 'N2'},
    {id: 789, floor: '5-14', queue: 3, section: 'N2'},

    {id: 790, floor: '6-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 791, floor: '6-14', queue: 3, section: 'N2'},
    {id: 792, floor: '6-14', queue: 3, section: 'N2'},
    {id: 793, floor: '6-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 794, floor: '6-14', queue: 3, section: 'N2'},

    {id: 795, floor: '7-14', queue: 3, section: 'N2'},
    {id: 796, floor: '7-14', queue: 3, section: 'N2'},
    {id: 797, floor: '7-14', queue: 3, section: 'N2'},
    {id: 798, floor: '7-14', queue: 3, section: 'N2'},
    {id: 799, floor: '7-14', queue: 3, section: 'N2'},

    {id: 800, floor: '8-14', queue: 3, section: 'N2'},
    {id: 801, floor: '8-14', queue: 3, section: 'N2', finishing: true, url: '' },
    {id: 802, floor: '8-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 803, floor: '8-14', queue: 3, section: 'N2'},
    {id: 804, floor: '8-14', queue: 3, section: 'N2'},

    {id: 805, floor: '9-14', queue: 3, section: 'N2'},
    {id: 806, floor: '9-14', queue: 3, section: 'N2'},
    {id: 807, floor: '9-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 808, floor: '9-14', queue: 3, section: 'N2'},
    {id: 809, floor: '9-14', queue: 3, section: 'N2', finishing: true, url: ''},

    {id: 810, floor: '10-14', queue: 3, section: 'N2'},
    {id: 811, floor: '10-14', queue: 3, section: 'N2'},
    {id: 812, floor: '10-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 813, floor: '10-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 814, floor: '10-14', queue: 3, section: 'N2', finishing: true, url: ''},

    {id: 815, floor: '11-14', queue: 3, section: 'N2'},
    {id: 816, floor: '11-14', queue: 3, section: 'N2'},
    {id: 817, floor: '11-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 818, floor: '11-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 819, floor: '11-14', queue: 3, section: 'N2'},

    {id: 820, floor: '12-14', queue: 3, section: 'N2'},
    {id: 821, floor: '12-14', queue: 3, section: 'N2'},
    {id: 822, floor: '12-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 823, floor: '12-14', queue: 3, section: 'N2'},
    {id: 824, floor: '12-14', queue: 3, section: 'N2'},

    {id: 825, floor: '13-14', queue: 3, section: 'N2'},
    {id: 826, floor: '13-14', queue: 3, section: 'N2'},
    {id: 827, floor: '13-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 828, floor: '13-14', queue: 3, section: 'N2', finishing: true, url: ''},
    {id: 829, floor: '13-14', queue: 3, section: 'N2'},

    {id: 830, floor: '14-14', queue: 3, section: 'N2'},
    {id: 831, floor: '14-14', queue: 3, section: 'N2'},
    {id: 832, floor: '14-14', queue: 3, section: 'N2'},

//N3

    {id: 833, floor: '1-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 834, floor: '1-12', queue: 3, section: 'N3'},
    {id: 835, floor: '1-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 836, floor: '1-12', queue: 3, section: 'N3'},
    {id: 837, floor: '1-12', queue: 3, section: 'N3'},
    {id: 838, floor: '1-12', queue: 3, section: 'N3'},

    {id: 839, floor: '2-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 840, floor: '2-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 841, floor: '2-12', queue: 3, section: 'N3'},
    {id: 842, floor: '2-12', queue: 3, section: 'N3'},
    {id: 843, floor: '2-12', queue: 3, section: 'N3'},
    {id: 844, floor: '2-12', queue: 3, section: 'N3'},
    {id: 845, floor: '2-12', queue: 3, section: 'N3'},

    {id: 846, floor: '3-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 847, floor: '3-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 848, floor: '3-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 849, floor: '3-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 850, floor: '3-12', queue: 3, section: 'N3'},
    {id: 851, floor: '3-12', queue: 3, section: 'N3'},
    {id: 852, floor: '3-12', queue: 3, section: 'N3'},

    {id: 853, floor: '4-12', queue: 3, section: 'N3'},
    {id: 854, floor: '4-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 855, floor: '4-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 856, floor: '4-12', queue: 3, section: 'N3'},
    {id: 857, floor: '4-12', queue: 3, section: 'N3'},
    {id: 858, floor: '4-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 859, floor: '4-12', queue: 3, section: 'N3'},

    {id: 860, floor: '5-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 861, floor: '5-12', queue: 3, section: 'N3'},
    {id: 862, floor: '5-12', queue: 3, section: 'N3'},
    {id: 863, floor: '5-12', queue: 3, section: 'N3'},
    {id: 864, floor: '5-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 865, floor: '5-12', queue: 3, section: 'N3'},
    {id: 866, floor: '5-12', queue: 3, section: 'N3', finishing: true, url: ''},

    {id: 867, floor: '6-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 868, floor: '6-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 869, floor: '6-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 870, floor: '6-12', queue: 3, section: 'N3'},
    {id: 871, floor: '6-12', queue: 3, section: 'N3'},
    {id: 872, floor: '6-12', queue: 3, section: 'N3', finishing: true, url: '' },
    {id: 873, floor: '6-12', queue: 3, section: 'N3', finishing: true, url: ''},

    {id: 874, floor: '7-12', queue: 3, section: 'N3'},
    {id: 875, floor: '7-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 876, floor: '7-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 877, floor: '7-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 878, floor: '7-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 879, floor: '7-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 880, floor: '7-12', queue: 3, section: 'N3'},

    {id: 881, floor: '8-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 882, floor: '8-12', queue: 3, section: 'N3'},
    {id: 883, floor: '8-12', queue: 3, section: 'N3'},
    {id: 884, floor: '8-12', queue: 3, section: 'N3'},
    {id: 885, floor: '8-12', queue: 3, section: 'N3'},
    {id: 886, floor: '8-12', queue: 3, section: 'N3'},
    {id: 887, floor: '8-12', queue: 3, section: 'N3'},

    {id: 888, floor: '9-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 889, floor: '9-12', queue: 3, section: 'N3'},
    {id: 890, floor: '9-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 891, floor: '9-12', queue: 3, section: 'N3'},
    {id: 892, floor: '9-12', queue: 3, section: 'N3'},
    {id: 893, floor: '9-12', queue: 3, section: 'N3'},
    {id: 894, floor: '9-12', queue: 3, section: 'N3'},

    {id: 895, floor: '10-12', queue: 3, section: 'N3'},
    {id: 896, floor: '10-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 897, floor: '10-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 898, floor: '10-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 899, floor: '10-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 900, floor: '10-12', queue: 3, section: 'N3'},
    {id: 901, floor: '10-12', queue: 3, section: 'N3'},

    {id: 902, floor: '11-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 903, floor: '11-12', queue: 3, section: 'N3'},
    {id: 904, floor: '11-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 905, floor: '11-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 906, floor: '11-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 907, floor: '11-12', queue: 3, section: 'N3', finishing: true, url: ''},
    {id: 908, floor: '11-12', queue: 3, section: 'N3'},

    {id: 909, floor: '12-12', queue: 3, section: 'N3'},
    {id: 910, floor: '12-12', queue: 3, section: 'N3'},
    {id: 911, floor: '12-12', queue: 3, section: 'N3'},
    {id: 912, floor: '12-12', queue: 3, section: 'N3'},

    //F1(5)
    {id: 913, floor: '1-7', queue: 5, section: 'F1'},
    {id: 914, floor: '1-7', queue: 5, section: 'F1'},
    {id: 915, floor: '1-7', queue: 5, section: 'F1'},
    {id: 916, floor: '1-7', queue: 5, section: 'F1'},
    {id: 917, floor: '1-7', queue: 5, section: 'F1'},

    {id: 918, floor: '2-7', queue: 5, section: 'F1'},
    {id: 919, floor: '2-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625518&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 920, floor: '2-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625520&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 921, floor: '2-7', queue: 5, section: 'F1'},
    {id: 922, floor: '2-7', queue: 5, section: 'F1'},

    {id: 923, floor: '3-7', queue: 5, section: 'F1'},
    {id: 924, floor: '3-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625522&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 925, floor: '3-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625524&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 926, floor: '3-7', queue: 5, section: 'F1'},
    {id: 927, floor: '3-7', queue: 5, section: 'F1'},

    {id: 928, floor: '4-7', queue: 5, section: 'F1'},
    {id: 929, floor: '4-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625526&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 930, floor: '4-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625528&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 931, floor: '4-7', queue: 5, section: 'F1'},
    {id: 932, floor: '4-7', queue: 5, section: 'F1'},

    {id: 933, floor: '5-7', queue: 5, section: 'F1'},
    {id: 934, floor: '5-7', queue: 5, section: 'F1'},
    {id: 935, floor: '5-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625530&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 936, floor: '5-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625532&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 937, floor: '5-7', queue: 5, section: 'F1'},

    {id: 938, floor: '6-7', queue: 5, section: 'F1'},
    {id: 939, floor: '6-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625534&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 940, floor: '6-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625536&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 941, floor: '6-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625538&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 942, floor: '6-7', queue: 5, section: 'F1'},

    {id: 943, floor: '7-7', queue: 5, section: 'F1'},
    {id: 944, floor: '7-7', queue: 5, section: 'F1', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625540&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 945, floor: '7-7', queue: 5, section: 'F1'},
    {id: 946, floor: '7-7', queue: 5, section: 'F1'},
    {id: 947, floor: '7-7', queue: 5, section: 'F1'},

    //F2

    {id: 948, floor: '1-7', queue: 5, section: 'F2'},
    {id: 949, floor: '1-7', queue: 5, section: 'F2'},
    {id: 950, floor: '1-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625542&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 951, floor: '1-7', queue: 5, section: 'F2'},

    {id: 952, floor: '2-7', queue: 5, section: 'F2'},
    {id: 953, floor: '2-7', queue: 5, section: 'F2'},
    {id: 954, floor: '2-7', queue: 5, section: 'F2'},
    {id: 955, floor: '2-7', queue: 5, section: 'F2'},

    {id: 956, floor: '3-7', queue: 5, section: 'F2'},
    {id: 957, floor: '3-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625544&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 958, floor: '3-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625546&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 959, floor: '3-7', queue: 5, section: 'F2'},

    {id: 960, floor: '4-7', queue: 5, section: 'F2'},
    {id: 961, floor: '4-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625548&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 962, floor: '4-7', queue: 5, section: 'F2'},
    {id: 963, floor: '4-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625550&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 964, floor: '5-7', queue: 5, section: 'F2'},
    {id: 965, floor: '5-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625552&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 966, floor: '5-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625554&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 967, floor: '5-7', queue: 5, section: 'F2'},

    {id: 968, floor: '6-7', queue: 5, section: 'F2'},
    {id: 969, floor: '6-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625556&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 970, floor: '6-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625558&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 971, floor: '6-7', queue: 5, section: 'F2'},

    {id: 972, floor: '7-7', queue: 5, section: 'F2'},
    {id: 973, floor: '7-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625560&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 974, floor: '7-7', queue: 5, section: 'F2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625562&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 975, floor: '7-7', queue: 5, section: 'F2'},


    //G2

    {id: 976, floor: '1-14', queue: 5, section: 'G2'},
    {id: 977, floor: '1-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625564&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 978, floor: '1-14', queue: 5, section: 'G2'},

    {id: 979, floor: '2-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625566&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 980, floor: '2-14', queue: 5, section: 'G2'},
    {id: 981, floor: '2-14', queue: 5, section: 'G2'},

    {id: 982, floor: '3-14', queue: 5, section: 'G2'},
    {id: 983, floor: '3-14', queue: 5, section: 'G2'},
    {id: 984, floor: '3-14', queue: 5, section: 'G2'},

    {id: 985, floor: '4-14', queue: 5, section: 'G2'},
    {id: 986, floor: '4-14', queue: 5, section: 'G2'},
    {id: 987, floor: '4-14', queue: 5, section: 'G2'},

    {id: 988, floor: '5-14', queue: 5, section: 'G2'},
    {id: 989, floor: '5-14', queue: 5, section: 'G2'},
    {id: 990, floor: '5-14', queue: 5, section: 'G2'},

    {id: 991, floor: '6-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625568&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 992, floor: '6-14', queue: 5, section: 'G2'},
    {id: 993, floor: '6-14', queue: 5, section: 'G2'},

    {id: 994, floor: '7-14', queue: 5, section: 'G2'},
    {id: 995, floor: '7-14', queue: 5, section: 'G2'},
    {id: 996, floor: '7-14', queue: 5, section: 'G2'},

    {id: 997, floor: '8-14', queue: 5, section: 'G2'},
    {id: 998, floor: '8-14', queue: 5, section: 'G2'},
    {id: 999, floor: '8-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625570&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1000, floor: '9-14', queue: 5, section: 'G2'},
    {id: 1001, floor: '9-14', queue: 5, section: 'G2'},
    {id: 1002, floor: '9-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625572&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1003, floor: '10-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625574&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1004, floor: '10-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625576&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1005, floor: '10-14', queue: 5, section: 'G2', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625580&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1006, floor: '11-14', queue: 5, section: 'G2'},
    {id: 1007, floor: '11-14', queue: 5, section: 'G2'},
    {id: 1008, floor: '11-14', queue: 5, section: 'G2'},

    {id: 1009, floor: '12-14', queue: 5, section: 'G2'},
    {id: 1010, floor: '12-14', queue: 5, section: 'G2'},
    {id: 1011, floor: '12-14', queue: 5, section: 'G2'},

    {id: 1012, floor: '13-14', queue: 5, section: 'G2'},
    {id: 1013, floor: '13-14', queue: 5, section: 'G2'},
    {id: 1014, floor: '13-14', queue: 5, section: 'G2'},

    {id: 1015, floor: '14-14', queue: 5, section: 'G2'},
    {id: 1016, floor: '14-14', queue: 5, section: 'G2'},
    
    //H2

    {id: 1017, floor: '1-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625582&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1018, floor: '1-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625584&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1019, floor: '1-12'},
    {id: 1020, floor: '1-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625586&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1021, floor: '1-12'},
    {id: 1022, floor: '1-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625588&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1023, floor: '2-12'},
    {id: 1024, floor: '2-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625590&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1025, floor: '2-12'},
    {id: 1026, floor: '2-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625592&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1027, floor: '2-12'},
    {id: 1028, floor: '2-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625594&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1029, floor: '2-12'},

    {id: 1030, floor: '3-12'},
    {id: 1031, floor: '3-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625596&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1032, floor: '3-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625598&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1033, floor: '3-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625600&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1034, floor: '3-12'},
    {id: 1035, floor: '3-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625602&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1036, floor: '3-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625604&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1037, floor: '4-12'},
    {id: 1038, floor: '4-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625606&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1039, floor: '4-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625608&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1040, floor: '4-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625610&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1041, floor: '4-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625612&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1042, floor: '4-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625614&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1043, floor: '4-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625616&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1044, floor: '5-12'},
    {id: 1045, floor: '5-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625618&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1046, floor: '5-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625620&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1047, floor: '5-12'},
    {id: 1048, floor: '5-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625622&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1049, floor: '5-12'},
    {id: 1050, floor: '5-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625624&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1051, floor: '6-12'},
    {id: 1052, floor: '6-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625626&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1053, floor: '6-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625628&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1054, floor: '6-12'},
    {id: 1055, floor: '6-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625630&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1056, floor: '6-12'},
    {id: 1057, floor: '6-12'},

    {id: 1058, floor: '7-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625632&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1059, floor: '7-12'},
    {id: 1060, floor: '7-12'},
    {id: 1061, floor: '7-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625634&cmd=show&action=showObjectInGrid&ncc=1' },
    {id: 1062, floor: '7-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625636&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1063, floor: '7-12'},
    {id: 1064, floor: '7-12'},

    {id: 1065, floor: '8-12'},
    {id: 1066, floor: '8-12'},
    {id: 1067, floor: '8-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625638&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1068, floor: '8-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625640&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1069, floor: '8-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625642&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1070, floor: '8-12'},
    {id: 1071, floor: '8-12'},

    {id: 1072, floor: '9-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625644&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1073, floor: '9-12'},
    {id: 1074, floor: '9-12'},
    {id: 1075, floor: '9-12'},
    {id: 1076, floor: '9-12'},
    {id: 1077, floor: '9-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625646&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1078, floor: '9-12'},

    {id: 1079, floor: '10-12'},
    {id: 1080, floor: '10-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625648&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1081, floor: '10-12'},
    {id: 1082, floor: '10-12'},
    {id: 1083, floor: '10-12'},
    {id: 1084, floor: '10-12'},
    {id: 1085, floor: '10-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625650&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1086, floor: '11-12'},
    {id: 1087, floor: '11-12'},
    {id: 1088, floor: '11-12'},
    {id: 1089, floor: '11-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625652&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1090, floor: '11-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625654&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1091, floor: '11-12',finishing: true, url: ''},
    {id: 1092, floor: '11-12'},

    {id: 1093, floor: '12-12'},
    {id: 1094, floor: '12-12'},
    {id: 1095, floor: '12-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625656&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1096, floor: '12-12', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625658&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1097, floor: '12-12'},
    {id: 1098, floor: '12-12',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625660&cmd=show&action=showObjectInGrid&ncc=1'},


    //K2

    {id: 1099, floor: '1-10'},
    {id: 1100, floor: '1-10'},
    {id: 1101, floor: '1-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625662&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1102, floor: '1-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625664&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1103, floor: '1-10'},

    {id: 1104, floor: '2-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625666&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1105, floor: '2-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625668&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1106, floor: '2-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625670&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1107, floor: '2-10'},
    {id: 1108, floor: '2-10'},

    {id: 1109, floor: '3-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625672&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1110, floor: '3-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625674&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1111, floor: '3-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625676&cmd=show&action=showObjectInGrid&ncc=1' },
    {id: 1112, floor: '3-10'},
    {id: 1113, floor: '3-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625678&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1114, floor: '4-10'},
    {id: 1115, floor: '4-10'},
    {id: 1116, floor: '4-10'},
    {id: 1117, floor: '4-10'},
    {id: 1118, floor: '4-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625680&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1119, floor: '5-10'},
    {id: 1120, floor: '5-10'},
    {id: 1121, floor: '5-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625682&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1122, floor: '5-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625684&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1123, floor: '5-10'},

    {id: 1124, floor: '6-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625686&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1125, floor: '6-10'},
    {id: 1126, floor: '6-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625688&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1127, floor: '6-10'},
    {id: 1128, floor: '6-10'},

    {id: 1129, floor: '7-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625690&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1130, floor: '7-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625692&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1131, floor: '7-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625694&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1132, floor: '7-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625696&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1133, floor: '7-10',},

    {id: 1134, floor: '8-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625698&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1135, floor: '8-10',},
    {id: 1136, floor: '8-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625700&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1137, floor: '8-10'},
    {id: 1138, floor: '8-10',finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625702&cmd=show&action=showObjectInGrid&ncc=1'},

    {id: 1139, floor: '9-10'},
    {id: 1140, floor: '9-10'},
    {id: 1142, floor: '9-10'},
    {id: 1141, floor: '9-10',finishing: true, url:'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625704&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1143, floor: '9-10'},

    {id: 1144, floor: '10-10'},
    {id: 1145, floor: '10-10'},
    {id: 1146, floor: '10-10', finishing: true, url:'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625706&cmd=show&action=showObjectInGrid&ncc=1'},
    {id: 1147, floor: '10-10', finishing: true, url: 'https://fsknw.bitrix24.ru/bitrix/tools/disk/focus.php?objectId=625708&cmd=show&action=showObjectInGrid&ncc=1'}



];

const apartmentNumber = document.querySelector('.apartment_number');
const floor = document.querySelector('.floor');
const queue = document.querySelector('.queue');
const section = document.querySelector('.section');
const finishing = document.querySelector('.finishing');
const finishingActiv = document.querySelector('.finishing_activ');
const frontDoor = document.querySelector('.front_door');

btnSearch.addEventListener('click', () => {
    if (inp.value !== '' && inp.value.length <= 4) {
        let res = home.find(item => item.id === +inp.value);

        if (res.id >= 725 && res.id <= 776) {

            // section.innerHTML = 'K31';
            // frontDoor.innerHTML = '19';
            // queue.innerHTML = '3';

        } else if (res.id >= 777 && res.id <= 813) {

            // section.innerHTML = 'K32';
            // frontDoor.innerHTML = '20';
            // queue.innerHTML = '3';

        } else if (res.id >= 814 && res.id <= 842) {

            // section.innerHTML = 'K33';
            // frontDoor.innerHTML = '21';
            // queue.innerHTML = '3';


        } else if (res.id >= 843 && res.id <= 879) {

            // section.innerHTML = 'K34';
            // frontDoor.innerHTML = '22';
            // queue.innerHTML = '3';


        } else if (res.id >= 880 && res.id <= 899) {

            // section.innerHTML = 'K35';
            // frontDoor.innerHTML = '23';
            // queue.innerHTML = '3';


        } else if (res.id >= 900 && res.id <= 911) {

            // section.innerHTML = 'K36';
            // frontDoor.innerHTML = '24';
            // queue.innerHTML = '3';

       } else if (res.id >= 913 && res.id <= 947) {

            section.innerHTML = 'F1';
            frontDoor.innerHTML = '11';
            queue.innerHTML = '5';


        } else if (res.id >= 948 && res.id <= 975) {

            section.innerHTML = 'F2';
            frontDoor.innerHTML = '12';
            queue.innerHTML = '5';


        } else if (res.id >= 976 && res.id <= 1016) {

            section.innerHTML = 'G2';
            frontDoor.innerHTML = '13';
            queue.innerHTML = '5';



        } else if (res.id >= 1017 && res.id <= 1098) {

            section.innerHTML = 'H2';
            frontDoor.innerHTML = '14';
            queue.innerHTML = '5';


        } else if (res.id >= 1099 && res.id <= 1147) {
            section.innerHTML = 'K2';
            frontDoor.innerHTML = '15';
            queue.innerHTML = '5';

        }



        // switch (res.section) {
        //     case "D2":
        //         frontDoor.innerHTML = '1'
        //         break;
        //
        //     case "D1":
        //         frontDoor.innerHTML = '2'
        //         break;
        //
        //     case "A1":
        //         frontDoor.innerHTML = '3'
        //         break;
        //
        //     case "G1":
        //         frontDoor.innerHTML = '4'
        //         break;
        //
        //     case "H1":
        //         frontDoor.innerHTML = '5'
        //         break;
        //
        //     case "K1":
        //         frontDoor.innerHTML = '6'
        //         break;
        //
        //     case "N4":
        //         frontDoor.innerHTML = '7'
        //         break;
        //
        //     case "N1":
        //         }.innerHTML = '8'
        //         break;
        //
        //     case "N2":
        //         frontDoor.innerHTML = '9'
        //         break;
        //
        //     case "N3":
        //         frontDoor.innerHTML = '10'
        //         break;
        //
        //     case "F1":
        //         frontDoor.innerHTML = '11'
        //         break;
        //
        //     case "F2":
        //         frontDoor.innerHTML = '12'
        //         break;
        //
        //     case "G2":
        //         frontDoor.innerHTML = '13'
        //         break;
        //
        //     case "H2":
        //         frontDoor.innerHTML = '14'
        //         break;
        //
        //     case "K2":
        //         frontDoor.innerHTML = '15'
        //         break;
        //
        //     default:
        //         break;
        // }

        apartmentNumber.innerHTML = res.id;
        floor.innerHTML = res.floor;
        // section.innerHTML = res.section;
        // queue.innerHTML = res.queue;

        finishing.innerText = res.finishing === true ? 'Да' : 'Нет';
        if (res.finishing === true) {
            finishingActiv.style.backgroundColor = 'khaki';
            finishing.innerHTML = `<a href = "${res.url}">Да</a>`;

            if (res.url === "") {
                finishing.innerHTML = '<a href = "indexErr.html">Да</a>';
            }


        } else {
            finishingActiv.style.backgroundColor = 'white';
        }
        inp.value = '';
    } else {
        inp.value = 'Нет такой квартиры';
    }
});

function clearInput() {
    inp.addEventListener('mousedown', (element) => {
        inp.value = '';
    });


}

clearInput();
