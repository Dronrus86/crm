
const inp = document.querySelector('.inp');
const btnSearch = document.querySelector('.btn_search');

const home = [

//K31
    {id: 725},
    {id: 726},
    {id: 727},

    {id: 728},
    {id: 729},
    {id: 730},

    {id: 731, finishing: true, url: '3/3.31.07%20Plus.pdf'},
    {id: 732},
    {id: 733},
    {id: 734},
    {id: 735, finishing: true, url: '3/3.31.11%20Plus.pdf'},
    {id: 736, finishing: true, url: '3/3.31.12%20Plus.pdf'},

    {id: 737},
    {id: 738, finishing: true, url: '3/3.31.14%20Basis.pdf'},
    {id: 739},
    {id: 740},
    {id: 741},
    {id: 742},

    {id: 743},
    {id: 744},
    {id: 745},
    {id: 746},
    {id: 747},
    {id: 748},

    {id: 749},
    {id: 750},
    {id: 751},
    {id: 752},
    {id: 753},
    {id: 754},

    {id: 755},
    {id: 756, finishing: true, url: '3/3.31.32%20Basis.pdf'},
    {id: 757},
    {id: 758},
    {id: 759, finishing: true, url: '3/3.31.35%20Basis.pdf'},
    {id: 760},

    {id: 761},
    {id: 762},
    {id: 763},
    {id: 764},
    {id: 765, finishing: true, url: '3/3.31.41%20Plus.pdf'},
    {id: 766},

    {id: 767},
    {id: 768, finishing: true, url: '3/3.31.44%20Plus.pdf'},
    {id: 769},
    {id: 770},
    {id: 771, finishing: true, url: '3/3.31.47%20Plus.pdf'},
    {id: 772},

    {id: 773},
    {id: 774},
    {id: 775},
    {id: 776},

//K32

    {id: 777},
    {id: 778},
    {id: 779},

    {id: 780},
    {id: 781},
    {id: 782},
    {id: 783},

    {id: 784},
    {id: 785},
    {id: 786, finishing: true, url: '3/3.32.10%20Plus.pdf'},
    {id: 787, finishing: true, url: '3/3.32.11%20Plus.pdf'},

    {id: 788},
    {id: 789, finishing: true, url: '3/3.32.13%20Plus.pdf'},
    {id: 790},
    {id: 791},

    {id: 792},
    {id: 793},
    {id: 794, finishing: true, url: '3/3.32.18%20Plus.pdf'},
    {id: 795, finishing: true, url: '3/3.32.19%20Plus.pdf'},

    {id: 796},
    {id: 797},
    {id: 798},
    {id: 799},

    {id: 800},
    {id: 801},
    {id: 802, finishing: true, url: '3/3.32.26%20Plus.pdf'},
    {id: 803},

    {id: 804},
    {id: 805, finishing: true, url: '3/3.32.29%20Plus.pdf'},
    {id: 806, finishing: true, url: '3/3.32.30%20Plus.pdf'},
    {id: 807},

    {id: 808},
    {id: 809},
    {id: 810},
    {id: 811, finishing: true, url: '3/3.32.35%20Plus.pdf'},

    {id: 812},
    {id: 813},


//K33

    {id: 814},
    {id: 815},
    {id: 816},

    {id: 817},
    {id: 818},
    {id: 819},

    {id: 820},
    {id: 821},
    {id: 822},

    {id: 823},
    {id: 824},
    {id: 825},

    {id: 826},
    {id: 827},
    {id: 828},

    {id: 829},
    {id: 830},
    {id: 831},

    {id: 832},
    {id: 833},
    {id: 834},

    {id: 835},
    {id: 836},
    {id: 837, finishing: true, url: '3/3.33.24%20Plus.pdf'},

    {id: 838},
    {id: 839},
    {id: 840},

    {id: 841},
    {id: 842},

// 34

    {id: 843},
    {id: 844},
    {id: 845},

    {id: 846},
    {id: 847},
    {id: 848, finishing: true, url: '3/3.34.06%20Basis.pdf'},
    {id: 849},

    {id: 850, finishing: true, url: '3/3.34.08%20Start.pdf'},
    {id: 851, finishing: true, url: '3/3.34.09%20Basis.pdf'},
    {id: 852, finishing: true, url: '3/3.34.10%20Basis.pdf'},
    {id: 853, finishing: true, url: '3/3.34.11%20Basis.pdf'},

    {id: 854},
    {id: 855},
    {id: 856, finishing: true, url: '3/3.34.14%20Basis.pdf'},
    {id: 857},

    {id: 858, finishing: true, url: '3/3.34.16%20Plus.pdf'},
    {id: 859},
    {id: 860},
    {id: 861, finishing: true, url: '3/3.34.19%20Plus.pdf'},

    {id: 862, finishing: true, url: '3/3.34.20%20Plus.pdf'},
    {id: 863, finishing: true, url: '3/3.34.21%20Plus.pdf'},
    {id: 864},
    {id: 865, finishing: true, url: '3/3.34.23%20Plus.pdf'},

    {id: 866, finishing: true, url: '3/3.34.24%20Plus.pdf'},
    {id: 867, finishing: true, url: '3/3.34.25%20Plus.pdf'},
    {id: 868, finishing: true, url: '3/3.34.26%20Basis.pdf'},
    {id: 869, finishing: true, url: '3/3.34.27%20Plus.pdf'},

    {id: 870, finishing: true, url: '3/3.34.28%20Plus.pdf'},
    {id: 871, finishing: true, url: '3/3.34.29%20Basis.pdf'},
    {id: 872},
    {id: 873},

    {id: 874},
    {id: 875, finishing: true, url: '3/3.34.33%20Basis.pdf'},
    {id: 876},
    {id: 877},

    {id: 878},
    {id: 879},


//K35

    {id: 880},
    {id: 881},
    {id: 882},
    {id: 883},

    {id: 884},
    {id: 885},
    {id: 886},
    {id: 887},

    {id: 888},
    {id: 889, finishing: true, url: '3/3.35.10%20Start.pdf'},
    {id: 890, finishing: true, url: '3/3.35.11%20Plus.pdf'},
    {id: 891},

    {id: 892, finishing: true, url: '3/3.35.13%20Plus.pdf'},
    {id: 893},
    {id: 894},
    {id: 895},

    {id: 896},
    {id: 897},
    {id: 898},
    {id: 899},

//K36

    {id: 900},
    {id: 901},
    {id: 902},

    {id: 903},
    {id: 904},
    {id: 905, finishing: true, url: '3/3.36.06%20Plus.pdf'},

    {id: 906, finishing: true, url: '3/3.36.07%20Plus.pdf'},
    {id: 907},
    {id: 908},

    {id: 909},
    {id: 910, finishing: true, url: '3/3.36.11%20Plus.pdf'},
    {id: 911, finishing: true, url: '3/3.36.12%20Plus.pdf'},


//37

    {id: 912},
    {id: 913},
    {id: 914},
    {id: 915},

    {id: 916, finishing: true, url: '3/3.37.05%20Plus.pdf'},
    {id: 917},
    {id: 918, finishing: true, url: '3/3.37.07%20Plus.pdf'},
    {id: 919},

    {id: 920, finishing: true, url: '3/3.37.09%20Plus.pdf'},
    {id: 921, finishing: true, url: '3/3.37.10%20Plus.pdf'},
    {id: 922, finishing: true, url: '3/3.37.11%20Plus.pdf'},
    {id: 923},

    {id: 924, finishing: true, url: '3/3.37.13%20Plus.pdf'},
    {id: 925, finishing: true, url: '3/3.37.14%20Plus.pdf'},
    {id: 926, finishing: true, url: '3/3.37.15%20Plus.pdf'},
    {id: 927},

    {id: 928, finishing: true, url: '3/3.37.17%20Plus.pdf'},
    {id: 929, finishing: true, url: '3/3.37.18%20Plus.pdf'},
    {id: 930, finishing: true, url: '3/3.37.19%20Basis.pdf'},
    {id: 931},

    {id: 932},
    {id: 933, finishing: true, url: '3/3.37.22%20Plus.pdf'},
    {id: 934, finishing: true, url: '3/3.37.23%20Plus.pdf'},
    {id: 935},

    {id: 936, finishing: true, url: '3/3.37.25%20Plus.pdf'},
    {id: 937, finishing: true, url: '3/3.37.26%20Basis.pdf'},
    {id: 938},
    {id: 939},

    {id: 939},

//K38

    {id: 638},
    {id: 639},

    {id: 640},
    {id: 641},
    {id: 642, finishing: true, url: '3/3.38.05%20Basis.pdf'},
    {id: 643},
    {id: 644},
    {id: 645},

    {id: 646},
    {id: 647, finishing: true, url: '3/3.38.10%20Plus.pdf'},
    {id: 648},
    {id: 649},
    {id: 650, finishing: true, url: '3/3.38.13%20Basis.pdf'},
    {id: 651, finishing: true, url: '3/3.38.14%20Basis.pdf'},

    {id: 652, finishing: true, url: '3/3.38.15%20Plus.pdf'},
    {id: 653},
    {id: 654},
    {id: 655},
    {id: 656, finishing: true, url: '3/3.38.19%20Plus.pdf'},
    {id: 657},

    {id: 658},
    {id: 659, finishing: true, url: '3/3.38.22%20Plus.pdf'},
    {id: 660},
    {id: 661},
    {id: 662},
    {id: 663},

    {id: 664, finishing: true, url: '3/3.38.27%20Plus.pdf'},
    {id: 665, finishing: true, url: '3/3.38.28%20Plus.pdf'},
    {id: 667},
    {id: 668},
    {id: 669},
    {id: 670, finishing: true, url: '3/3.38.32%20Plus.pdf'},

    {id: 671, finishing: true, url: '3/3.38.33%20Plus.pdf'},
    {id: 672, finishing: true, url: '3/3.38.34%20Plus.pdf'},
    {id: 673, finishing: true, url: '3/3.38.35%20Plus.pdf'},
    {id: 674},
    {id: 675},
    {id: 676, finishing: true, url: '3/3.38.38%20Plus.pdf'},

    {id: 677},
    {id: 678, finishing: true, url: '3/3.38.40%20Plus.pdf'},
    {id: 679},
    {id: 680},
    {id: 681},
    {id: 682, finishing: true, url: '3/3.38.44%20Start.pdf'},

    {id: 683},
    {id: 684},
    {id: 685, finishing: true, url: '3/3.38.47%20Plus.pdf'},
    {id: 686, finishing: true, url: '3/3.38.48%20Plus.pdf'},
    {id: 687, finishing: true, url: '3/3.38.49%20Plus.pdf'},
    {id: 688},

//K39



]

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

            section.innerHTML = 'K31';
            frontDoor.innerHTML = '19';
            queue.innerHTML = '3';

        } else if (res.id >= 777 && res.id <= 813) {

            section.innerHTML = 'K32';
            frontDoor.innerHTML = '20';
            queue.innerHTML = '3';

        } else if (res.id >= 814 && res.id <= 842) {

            section.innerHTML = 'K33';
            frontDoor.innerHTML = '21';
            queue.innerHTML = '3';


        } else if (res.id >= 843 && res.id <= 879) {

            section.innerHTML = 'K34';
            frontDoor.innerHTML = '22';
            queue.innerHTML = '3';


        } else if (res.id >= 880 && res.id <= 899) {

            section.innerHTML = 'K35';
            frontDoor.innerHTML = '23';
            queue.innerHTML = '3';


        } else if (res.id >= 900 && res.id <= 911) {

            section.innerHTML = 'K36';
            frontDoor.innerHTML = '24';
            queue.innerHTML = '3';


        } else if (res.id >= 912 && res.id <= 939) {

            section.innerHTML = 'K37';
            frontDoor.innerHTML = '25';
            queue.innerHTML = '3';


        } else if (res.id >= 638 && res.id <= 688) {

            section.innerHTML = 'K38';
            frontDoor.innerHTML = '17';
            queue.innerHTML = '3';

        }


        function floorHome() {
            if (res.id >= 638 && res.id <= 639 || res.id >= 880 && res.id <= 883 || res.id >= 843 && res.id <= 845 || res.id >= 814 && res.id <= 816 || res.id >= 777 && res.id <= 779 || res.id >= 725 && res.id <= 727) {
                floor.innerHTML = '1';
            } else if (res.id >= 640 && res.id <= 645 || res.id >= 728 && res.id <= 730 || res.id >= 780 && res.id <= 783 || res.id >= 817 && res.id <= 819 || res.id >= 846 && res.id <= 849 || res.id >= 884 && res.id <= 887 || res.id >= 900 && res.id <= 902 || res.id >= 912 && res.id <= 915) {
                floor.innerHTML = '2';
            } else if (res.id >= 646 && res.id <= 651 || res.id >= 731 && res.id <= 736 || res.id >= 784 && res.id <= 787 || res.id >= 820 && res.id <= 822 || res.id >= 850 && res.id <= 853 || res.id >= 888 && res.id <= 891 || res.id >= 903 && res.id <= 905 || res.id >= 916 && res.id <= 919) {
                floor.innerHTML = '3';
            } else if (res.id >= 652 && res.id <= 657 || res.id >= 737 && res.id <= 742 || res.id >= 788 && res.id <= 791 || res.id >= 823 && res.id <= 825 || res.id >= 854 && res.id <= 857 || res.id >= 892 && res.id <= 895 || res.id >= 906 && res.id <= 908 || res.id >= 920 && res.id <= 923) {
                floor.innerHTML = '4';
            } else if (res.id >= 658 && res.id <= 663 || res.id >= 743 && res.id <= 748 || res.id >= 792 && res.id <= 795 || res.id >= 826 && res.id <= 828 || res.id >= 858 && res.id <= 861 || res.id >= 896 && res.id <= 899 || res.id >= 909 && res.id <= 911 || res.id >= 924 && res.id <= 927) {
                floor.innerHTML = '5';
            } else if (res.id >= 664 && res.id <= 670 || res.id >= 749 && res.id <= 754 || res.id >= 796 && res.id <= 799 || res.id >= 829 && res.id <= 831 || res.id >= 862 && res.id <= 865 || res.id >= 928 && res.id <= 931) {
                floor.innerHTML = '6';
            } else if (res.id >= 671 && res.id <= 676 || res.id >= 755 && res.id <= 760 || res.id >= 800 && res.id <= 803 || res.id >= 832 && res.id <= 834 || res.id >= 866 && res.id <= 869 || res.id >= 932 && res.id <= 935) {
                floor.innerHTML = '7';
            } else if (res.id >= 677 && res.id <= 682 || res.id >= 761 && res.id <= 766 || res.id >= 804 && res.id <= 807 || res.id >= 835 && res.id <= 837 || res.id >= 870 && res.id <= 873 || res.id >= 936 && res.id <= 939) {
                floor.innerHTML = '8';
            } else if (res.id >= 683 && res.id <= 688 || res.id >= 767 && res.id <= 772 || res.id >= 808 && res.id <= 811 || res.id >= 838 && res.id <= 840 || res.id >= 874 && res.id <= 877) {
                floor.innerHTML = '9';
            } else if (res.id >= 773 && res.id <= 776 || res.id >= 812 && res.id <= 813 || res.id >= 841 && res.id <= 842 || res.id >= 878 && res.id <= 879) {
                floor.innerHTML = '10';
            } else {
                floor.innerHTML = null;
            }

        }

        floorHome();



        apartmentNumber.innerHTML = res.id;
        // floor.innerHTML = res.floor;
        // section.innerHTML = res.section;


        finishing.innerHTML = res.finishing === true ? 'Да' : 'Нет';
        if (res.finishing === true) {
            finishingActiv.style.backgroundColor = 'khaki';
            // finishing.innerHTML = `<a href = "${res.url}">Да</a>`;

            finishing.innerHTML = `<a href = "https://oneplatform-my.sharepoint.com/personal/andrey_manivskiy_bonava_com/Documents/%D0%A1%D0%BA%D0%B0%D0%BD%D1%8B%20%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%BE%D0%B2%20%D0%BF%D0%BE%20%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D0%BA%D0%B5%20KL-${res.url}">Да</a>`;

        } else {
            finishingActiv.style.backgroundColor = 'white';
        }
        inp.value = '';
    } else {
        inp.value = 'Нет такой квртиры';
    }
});

function clearInput() {
    inp.addEventListener('mousedown', () => {
        inp.value = '';
    });


}

clearInput();


