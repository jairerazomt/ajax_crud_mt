SELECT * FROM audience
BEGIN
    INSERT INTO audience(id,owner,capacity,category_id,name)
    VALUES(:id,:owner,:capacity,:category_id,:name);
    :status_code:=201;
    EXCEPTION WHEN OTHERS THEN
    :status_code:=204;
END;
BEGIN
    UPDATE audience SET OWNER =:owner, CAPACITY=:capacity, CATEGORY_ID=:category_id, NAME=:name WHERE id=:id;
    :status_code:=201;
END;
BEGIN
    DELETE from audience where id=:id;
    :status_code:=204;
END;