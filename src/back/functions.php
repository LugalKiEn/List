<?
    function getData($connect) {
        $items = mysqli_query($connect, "SELECT `value` FROM `data` WHERE `id` = 1");

        $itemsList = "";
        while($item = mysqli_fetch_assoc($items)) {
            $itemsList = $item;
        }
        // if ($itemsList["value"])
        //     print_r(($itemsList["value"]));
        echo json_encode($itemsList["value"]);
    }

    function postData($connect, $data) {
        // $newData = json_decode($data);
        mysqli_query($connect, "UPDATE `data` SET `value` = '$data' WHERE `id` = 1");

        // while($row = $result->fetch_assoc()) 
        //     print_r($row);

        $res = [
            "message" => "list saved successfully",
            "newData" => $data
        ];

        echo json_encode($res);
    }