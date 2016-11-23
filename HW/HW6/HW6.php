<!DOCTYPE html>
<!--
HW6

 -->
<html lang = "en">
  <head>
    <title>HW6</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
  <?php
      $dbhost = '';
      $dbuser = 'moren081';
      $dbpass = 'moren081';
      $conn = mysql_connect($dbhost, $dbuser, $dbpass);
      if(! $conn )
      {
        die('Could not connect: ' . mysql_error());
      }
      mysql_select_db( 'moren081' );

      if ($_SERVER["REQUEST_METHOD"] == "POST")
      {
        $sql = "SELECT * FROM teams where teamID = $_POST["teamID"]";

        $retval = mysql_query( $sql, $conn );
        if(! $retval )
        {
          die('Could not get data: ' . mysql_error());
        }
        ?>

        <table>
          <thead>
            <tr>
              <th>Team ID</th>
              <th>Team Name</th>
              <th>Start Year</th>
              <th>Owner Name</th>
              <th>GMName</th>
              <th>Coach Name</th>
              <th>MVP</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Phone</th>
              <th>Division Record</th>
              <th>Conference Record</th>
            </tr>
          <tbody>
          <?php
            while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
            {
                $teamID = $row['teamID'];
                $teamName = $row['teamName'];
                $startYear = $row['startYear'];
                $ownerName = $row['ownerName'];
                $GMName = $row['GMName'];
                $coachName = $row['coachName'];
                $MVP = $row['MVP'];
                $address = $row['areaAddress'];
                $city = $row['city'];
                $state =  $row['state'];
                $zipcode = $row['zipcode'];
                $phone = $row['phone'];
                $divRecord = $row['divRecord'];
                $confRecord = $row['confRecord'];
                echo "<tr>";
                          echo "<td>".$teamID."</td>" ;
                          echo "<td>".$teamName."</td>";
                          echo "<td>".$startYear."</td>";
                          echo "<td>".$ownerName."</td>";
                          echo "<td>".$GMName."</td>";
                          echo "<td>".$coachName."</td>";
                          echo "<td>".$MVP."</td>";
                          echo "<td>".$address."</td>";
                          echo "<td>".$city."</td>";
                          echo "<td>".$state."</td>";
                          echo "<td>".$zipcode."</td>";
                          echo "<td>".$phone."</td>";
                          echo "<td>".$divRecord."</td>";
                          echo "<td>".$confRecord."</td>";
                echo "</tr>";
            }
          ?>

          </table>



    <?php echo 'Connected successfully'; ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
      <input type="text" name="teamID" autofocus /> <br>
      <button type="submit" value="Search for Team" />Search for Team</button>
    </form>



  <?php
      mysql_close($conn);
      ?>
  </body>
</html>
